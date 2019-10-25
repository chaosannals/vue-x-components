const path = require('path');
const svgCaptcha = require('svg-captcha');

module.exports = {
    configureWebpack: {
        entry: '@/main.js',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'demo'),
                '@source': path.resolve(__dirname, 'source'),
            },
        },
    },
    devServer: {
        setup: app => {
            app.get('/some/captcha', (req, res) => {
                let captcha = svgCaptcha.create({
                    size: 5,
                    ignoreChars: '0o1i',
                    noise: 2,
                    height: 44,
                });
                // req.session.captcha = captcha.text.toLowerCase();
                res.set({
                    'Content-Type': 'image/svg+xml',
                });
                res.send(captcha.data);
            });
        },
    },
};