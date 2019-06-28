// const mongoose = require('mongoose')
// const log = console.log

// mongoose.connect('mongodb+srv://chanlay:chanlay123@yky-api-ajgvf.mongodb.net/yky-blog-api?retryWrites=true&w=majority', {
//     useNewUrlParser: true
// }, (err) => { 
//     if (!err) {
//         log('MongoDB Connection Succeeded.')
//     } else {
//         log('Error in DB connection : ' + err)
//     }
// });

// require('../models/posts')


// module.exports = {
//     mongourl: 'mongodb+srv://chanlay:chanlay123@yky-api-ajgvf.mongodb.net/test?retryWrites=true&w=majority'
// }

// mongodb+srv://chanlay:chanlay123@yky-api-ajgvf.mongodb.net/yky-blog-api?retryWrites=true&w=majority

// mongodb://127.0.0.1:27017/yky-blog-api



// const connectionString = 'mongodb+srv://chanlay:chanlay123@yky-api-ajgvf.mongodb.net/test?retryWrites=true&w=majority'


// const mongoose = require('mongoose')
// const postSchema = require('../models/posts')
// const Post = mongoose.model('post', postSchema, 'post')

// async function createUser(username) {
//     return new User({
//         username,
//         created: Date.now()
//     }).save()
// }

// async function findUser(username) {
//     return await User.findOne({
//         username
//     })
// }

// ;
// (async () => {
//     const connector = mongoose.connect(connectionString)
//     const username = process.argv[2].split('=')[1]

//     let user = await connector.then(async () => {
//         return findUser(username)
//     })

//     if (!user) {
//         user = await createUser(username)
//     }

//     console.log(user)
//     process.exit(0)
// })()