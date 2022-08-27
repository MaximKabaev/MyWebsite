export function applyToFirebase(firebase, user, data, collectionName) {
    if(data == '' || data == ' '){
        return;
    }
    let commentsRef;
    const db = firebase.firestore();
    commentsRef = db.collection(collectionName);

    const { serverTimestamp } = firebase.firestore.FieldValue;

    commentsRef.add({
        author_uid: user.uid,
        comment: data,
        createdAt: serverTimestamp(),
        name: user.displayName,
    }).then(() => {
        location.reload();
    });

    
}

export async function readFirebase(firebase, collectionName, element, user){
    let unsubscribe;
    let commentsRef;
    var anyData = false;
    const db = firebase.firestore();
    commentsRef = db.collection(collectionName);

    unsubscribe = commentsRef
        .orderBy('createdAt', 'desc')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const items = querySnapshot.docs.map(doc => {
                    if(user != null && doc.data().author_uid == user.uid){
                        var t = 
                        `<li>
                            <div class="comment-container">
                                <div class="comment-author">
                                    <p>${doc.data().name}</p>
                                    <div class="remove-button" id=${doc.id}>
                                        <button>Remove</button>
                                    </div>
                                </div>
                                <div class="comment-text">
                                    <p>${doc.data().comment}</p>
                                </div>
                                <div class="comment-date">
                                    <p>${new Date(doc.data().createdAt.seconds * 1000).toDateString()}</p>
                                </div>
                            </div>
                        </li>
                        <br>`;
                    }
                    else{
                        var t = 
                        `<li>
                            <div class="comment-container">
                                <div class="comment-author">
                                    <p>${doc.data().name}</p>
                                </div>
                                <div class="comment-text">
                                    <p>${doc.data().comment}</p>
                                </div>
                                <div class="comment-date">
                                    <p>${new Date(doc.data().createdAt.seconds * 1000).toDateString()}</p>
                                </div>
                            </div>
                        </li>
                        <br>`;
                    }
    
                    if(doc.data().comment != ''){
                        anyData = true;
                        return t;
                    }
    
                });
    
                if(anyData){
                    element.innerHTML = items.join('');
                }
                else{
                    element.innerHTML = '<p>No comments yet</p>';
                    element.classList.add('no-comments');
                }
            });
        });
}

export function removeFromFirebase(firebase, collectionName, id){
    const db = firebase.firestore();

    console.log(id);

    var commentsRef = db.collection(collectionName).doc(id);

    commentsRef.get()
    .then(function(doc) {
            const promises = [];
            promises.push(doc.ref.delete());
            return Promise.all(promises);
        })
        .then(() => {
          window.location.reload()
        });
}
