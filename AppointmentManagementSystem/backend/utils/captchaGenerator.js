const crypto = require('crypto');


function generateCaptcha() {
    const length = 6; 
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(0, chars.length);
        captcha += chars[randomIndex];
    }

    return captcha;
}

function validateCaptcha(inputCaptcha, generatedCaptcha) {
    return inputCaptcha === generatedCaptcha;
}

module.exports = { generateCaptcha, validateCaptcha };