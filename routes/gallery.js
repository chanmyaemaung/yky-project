const express = require('express')
const jsonData = require('../public/data/data.json')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        await res.render('gallery', {
            title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
            navTitle: 'Yay Kyi Yar',
            company: 'Travel & Tour Co., Ltd.',
            jsonData: jsonData,
        })
    } catch (e) {
        res.status(200).send(e)
    }

})


module.exports = router