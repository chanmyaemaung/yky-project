const express = require('express')
const jsonData = require('../public/data/data.json')
// const postData = require('../public/data/post.json')
// const mongoose = require('mongoose')
// const Post = mongoose.model('Post')
const log = console.log
const router = express.Router()


// router.get('/', (req, res) => {
//     Post.find({}, (err, posts) => {
//         if (err) {
//             log('Error!')
//         } else {
//             res.render('index', {
//                 posts: posts,
//                 title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
//                 navTitle: 'Yay Kyi Yar',
//                 company: 'Travel & Tour Co., Ltd.',
//                 jsonData: jsonData
//                 // postData: postData
//             })
//         }
//     })
// })

router.get('/', (req, res) => {
    res.render('index', {
        // posts: posts,
        title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
        navTitle: 'Yay Kyi Yar',
        company: 'Travel & Tour Co., Ltd.',
        jsonData: jsonData
        // postData: postData
    })
})



module.exports = router