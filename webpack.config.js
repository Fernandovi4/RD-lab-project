const dev = require('./webpack.config.dev.js');
const prod = require('./webpack.config.prod.js');

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        return dev;
    } else {
        return prod;
    }
};