const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

router.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chaia05276616@gmail.com',  
        pass: 'izwh pqlg scey bpvl' 
    },
    tls: {
        rejectUnauthorized: false
    }
});

router.post('/', async (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: 'chaia05276616@gmail.com',  
        to: email,
        subject: 'הרשמה לניוזלייטר',
        text: 'נרשמת בהצלחה לניוזלייטר שלנו!'
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`נשלח מייל לניוזלייטר לכתובת ${email}`);
        res.status(200).send('נשלח מייל לניוזלייטר');
    } catch (error) {
        console.error('שגיאה בשליחת מייל לניוזלייטר:', error);
        res.status(500).send('שגיאה בשליחת מייל לניוזלייטר');
    }
});


module.exports = router;
