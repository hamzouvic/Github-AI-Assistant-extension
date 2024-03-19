const path = require('path');

module.exports = {
    entry: {
        ApiCalls: './src/ApiCalls.js',
        content: './scripts/content.js',
        popup: './popup.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
};
