const express = require('express');
const { register,login } = require('../controllers/authController');
const { generateCaptcha } = require('../utils/captchaGenerator');
const router = express.Router();

//-------------------Generate CAPTCHA for registration----------------------------
router.get('/captcha', (req, res) => {
  const captcha = generateCaptcha();
  req.session.captcha = captcha;
  res.json({ captcha });
});

//----------------------Register a new user----------------------------
router.post('/register', (req, res) => {
  const { name, email, password, userType, captcha } = req.body;

  if (!captcha) {
    return res.status(400).json({ message: 'Captcha is required' });
  }
  console.log('Received registration data:', { name, email, password, userType, captcha });
  res.status(200).json({ message: 'Registration successful' });
});

router.post('/login', login);

module.exports = router;