const express = require('express')
const jsonData = require('../public/data/data.json')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('gallery', {
        title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
        navTitle: 'Yay Kyi Yar',
        company: 'Travel & Tour Co., Ltd.',
        jsonData: jsonData,
    })
})


module.exports = router