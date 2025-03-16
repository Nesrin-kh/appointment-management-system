const { generateCaptcha, validateCaptcha } = require('../utils/captchaGenerator');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    const { name, email, password, userType, captcha } = req.body;

    //-----------------Validate CAPTCHA-------------------------------------
    if (!validateCaptcha(captcha, req.session.captcha)) {
        return res.status(400).json({ error: 'Invalid CAPTCHA' });
    }

    //---------------------------Hash the password-------------------------
    const hashedPassword = bcrypt.hashSync(password, 10);
    //---------------------------Create the user----------------------------
    User.create({ name, email, password: hashedPassword, userType }, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'User registered successfully' });
    });
};
//---------------------------------Login a user----------------------------------
const login = (req, res) => {
    const { email, password } = req.body;
  
//----------------------Find the user by email----------------------------------
    User.findByEmail(email, (err, user) => {
      if (err || !user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      //-----------------------Validate the password--------------------
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      //--------------------------Generate a JWT token---------------------
      const token = jwt.sign(
        { id: user.id, userType: user.userType },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
      );
  
      //----------------------Return the token-------------------------
      res.json({ token });
    });
  };
  

module.exports = { register , login };