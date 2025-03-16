const captchaMiddleware = (req, res, next) => {
    const { captcha } = req.body;
    if (!captcha || captcha !== req.session.captcha) {
        return res.status(400).json({ error: 'Invalid captcha' });
    }
    next();
};

module.exports = captchaMiddleware;