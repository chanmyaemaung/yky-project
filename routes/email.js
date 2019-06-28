require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const log = console.log
const router = express.Router()

router.post('/contact', (req, res) => {
    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        post: 465,
        secure: true,

        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    const messageTemplate = {
        to: req.body.email,
        phone: req.body.phone,
        text: req.body.text + '\n Plain text body',
        html: req.body.text + '<br/>' + '<b>' + 'This is HTML body' + '</b>'
    }

    // send mail
    smtpTransport.sendMail(messageTemplate, function (error, info) {
        if (error) {
            smtpTransport.close()

            return res.json({
                status: 'error',
                msg: 'Email sending failed!'
            })
        } else {
            smtpTransport.close()
            log('Message %s sent %s', info.messageId, info.response)

            return res.json({
                status: 'ok',
                msg: 'Email has been sent!'
            })

        }
    })
})




module.exports = router