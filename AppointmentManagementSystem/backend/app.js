const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const adminRoutes = require('./routes/adminRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');



dotenv.config();
const app = express();

//----MIDDLEWARE----------
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use(express.json());


app.use(
  session({
    secret: process.env.SECRET_KEY || 'your-secret-key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  })
);

//-----ROUTES-----------------
app.use('/auth', authRoutes);
app.use('/patient', patientRoutes);
app.use('/doctor', doctorRoutes);
app.use('/admin', adminRoutes);
app.use('/appointment', appointmentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});