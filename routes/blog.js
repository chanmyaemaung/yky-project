const express = require('express')
const jsonData = require('../public/data/data.json')
// const postData = require('../public/data/post.json')
// const mongoose = require('mongoose')
// const Post = mongoose.model('Post')
const log = console.log
const router = express.Router()


router.get('/', (req, res) => {
    res.render('blog', {
        // posts: posts,
        title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
        navTitle: 'Yay Kyi Yar',
        company: 'Travel & Tour Co., Ltd.',
        jsonData: jsonData
        // postData: postData
    })
})

// // Blog : Show all post from DB
// router.get('/', async (req, res) => {

//     try {
//         await Post.find({}, (err, posts) => {
//             if (err) {
//                 log('Error!')
//             } else {
//                 res.render('blog', {
//                     posts: posts,
//                     title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
//                     navTitle: 'Yay Kyi Yar',
//                     company: 'Travel & Tour Co., Ltd.',
//                     jsonData: jsonData
//                     // postData: postData
//                 })
//             }
//         })
//     } catch (e) {
//         res.status(200).send(e)
//     }


// })

// // Call to ceate a Blog new post
// router.get('/new', async (req, res) => {
//     try {
//         await res.render('new', {
//             title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
//             navTitle: 'Yay Kyi Yar',
//             company: 'Travel & Tour Co., Ltd.',
//             jsonData: jsonData
//         })
//     } catch (e) {
//         res.status(304).send(e)
//     }
// })

// // Create Blog Post
// router.post('/', async (req, res) => {

//     try {
//         // create post
//         await Post.create(req.body.post, (err) => {
//             if (err) {
//                 res.render('new')
//             } else {
//                 // then, redirect to the blog
//                 res.redirect('/blog')
//             }
//         })
//     } catch (e) {
//         res.status(201).send(e)
//     }
// })

// // Show Post
// router.get('/:id', async (req, res) => {

//     try {
//         await Post.findById(req.params.id, (err, foundPost) => {
//             if (err) {
//                 res.redirect('/blog')
//             } else {
//                 res.render('show', {
//                     post: foundPost,
//                     title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
//                     navTitle: 'Yay Kyi Yar',
//                     company: 'Travel & Tour Co., Ltd.',
//                     jsonData: jsonData
//                 })
//             }
//         })
//     } catch (e) {
//         res.status(200)(e)
//     }
// })

// // Edit Post
// router.get('/:id/edit', async (req, res) => {

//     try {
//         await Post.findById(req.params.id, (err, foundPost) => {
//             if (err) {
//                 res.redirect('/')
//             } else {
//                 res.render('edit-post', {
//                     post: foundPost,
//                     title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
//                     navTitle: 'Yay Kyi Yar',
//                     company: 'Travel & Tour Co., Ltd.',
//                     jsonData: jsonData
//                 })
//             }
//         })
//     } catch (e) {
//         res.status(304).send(e)
//     }


// })

// // Update Post
// router.put('/:id', async (req, res) => {
//     req.body.post.body = req.sanitize(req.body.post.body)
//     try {

//         await Post.findByIdAndUpdate(req.params.id, req.body.post, (err) => {
//             if (err) {
//                 res.redirect('/blog/')
//             } else {
//                 res.redirect('/blog/' + req.params.id)
//             }
//         })
//     } catch (e) {
//         res.status(200).send(e)
//     }
// })

// // Delete Route
// router.delete('/:id', (req, res) => {
//     res.send('Destroy')
// })

// Post.create({
//     title: 'Test Blog 2',
//     image: '',
//     content: 'Hello this is from a blog'
// })

module.exports = router