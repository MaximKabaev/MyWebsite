const path = require('path');

module.exports = {
    mode: 'development',
    devtoools: 'eval-source-map',
    entry: './Public/fire-database.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
