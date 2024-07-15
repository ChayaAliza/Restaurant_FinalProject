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
    const { name, phone, email, reason, message } = req.body;

    const mailOptions = {
        from: email,   
        to: 'chaia05276616@gmail.com', 
        subject: 'פנייה חדשה מהאתר',
        text: `
        שם: ${name}
        טלפון: ${phone}
        אימייל: ${email}
        סיבת ההתקשרות: ${reason}
        הודעה: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`נשלחה הפניה למייל של המסעדה מאת ${email}`);
        res.status(200).send('נשלחה הפניה למייל של המסעדה');
    } catch (error) {
        console.error('שגיאה בשליחת הפניה למייל של המסעדה:', error);
        res.status(500).send('שגיאה בשליחת הפניה למייל של המסעדה');
    }
});

module.exports = router;
