require('dotenv').config();  // Load .env file

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ID,  // Use environment variable
        pass: process.env.EMAIL_PASS // Use environment variable
    }
});

console.log('Nodemailer setup done!');
