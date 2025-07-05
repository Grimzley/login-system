const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        login: './src/login.js',
        dashboard: './src/dashboard.js',
        auth: './src/auth.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}
