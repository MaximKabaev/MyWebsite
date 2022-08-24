export function applyToFirebase(firebase, user, data, collectionName) {
    if(data == ''){
        return;
    }
    let commentsRef;
    const db = firebase.firestore();
    commentsRef = db.collection(collectionName);

    const { serverTimestamp } = firebase.firestore.FieldValue;

    commentsRef.add({
        uid: user.uid,
        comment: data,
        createdAt: serverTimestamp()
    });
}

export function readFirebase(firebase, collectionName, element){
    let unsubscribe;
    let commentsRef;
    const db = firebase.firestore();
    commentsRef = db.collection(collectionName);

    unsubscribe = commentsRef
        .onSnapshot(querySnapshot => {
            
            // Map results to an array of li elements

            const items = querySnapshot.docs.map(doc => {

                var t = `<li>${doc.data().comment}</li>`
                if(t != '<li></li>'){
                    return t;
                }

            });

            element.innerHTML = items.join('');

        });

}