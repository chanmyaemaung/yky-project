require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const log = console.log
const jsonData = require('../public/data/data.json')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('contact', {
        title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
        navTitle: 'Yay Kyi Yar',
        company: 'Travel & Tour Co., Ltd.',
        jsonData: jsonData
    })
})

router.post('/', (req, res) => {
    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        post: 465,
        secure: true,

        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })


    // // Step 2
    let mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: 'Yay Kyi Yar: ' + req.body.mainsub,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        mainsub: req.body.mainsub,
        text: req.body.text,
        // html: '<ul>' + req.body.text + '</ul>' + '<table>' + '<thead>' + '<tr>' + '<th>' + 'Name' + '</th>' + '<th>' + 'Phone' + '</th>' + '<th>' + 'Email' + '</th>' + '</tr>' + '</thead>' + '<tbody>' + '<tr>' + '<td>' + req.body.name + '</td>' + '<td>' + req.body.phone + '</td>' + '<td>' + req.body.email + '</td>' + '</tr>' + '</tbody>' + '</table>'
        html: '<p>' + '<b>' + req.body.text + '</b>' + '</p>' + '<br/>' + '<hr>' + 'Name: ' + req.body.name + '<br/>' + 'Phone No: ' + req.body.phone + '<br/>' + 'Email: ' + req.body.email
    }

    // Step 3
    smtpTransport.sendMail(mailOptions, function (err, data) {
        if (err) {
            return log(err)
        }
        log('Your email has been sent' + data.response)
    })
})


module.exports = router