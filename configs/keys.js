
// dbPassword = 'mongodb+srv://chanlay:'+ encodeURIComponent('chanlay123') + '@yaykyiyar-ajgvf.azure.mongodb.net/yky-blog?retryWrites=true&w=majority?socketTimeoutMS=90000';
dbPassword = 'mongodb://chanlay:chanlay123@yaykyiyar-shard-00-01-ajgvf.azure.mongodb.net:27017,yaykyiyar-shard-00-01-ajgvf.azure.mongodb.net:27017,yaykyiyar-shard-00-01-ajgvf.azure.mongodb.net:27017/yky-blog?ssl=true&replicaSet=yaykyiyar-shard-0&authSource=admin&retryWrites=true'

module.exports = {
    mongoURI: dbPassword
};





// mongodb://chanlay:chanlay123@yaykyiyar-shard-00-01-ajgvf.azure.mongodb.net:27017, yaykyiyar-shard-00-00-ajgvf.azure.mongodb.net:27017, yaykyiyar-shard-00-00-ajgvf.azure.mongodb.net:27017/yky-blog?ssl=true&replicaSet=ClusterMasjeed1-shard-0&authSource=admin&retryWrites=true



// const mongoose = require('mongoose')
// const log = console.log


// const options = {
//     useNewUrlParser: true,
//     socketTimeoutMS: 60000, //or 90000
//     connectTimeoutMS: 90000,
//     reconnectTries: 1000
// }

// mongoose.connect('mongodb://chanlay:chanlay123@ds343887.mlab.com:43887/heroku_qnsz0r7k', options).then(
//     () => {
//         log('MongoDB Connection Succeeded.')
//     },
//     err => {
//         log(err)
//     }
// );


// // mongodb://127.0.0.1:27017/yky-blog-api
// // mongodb://chanlay:chanlay123@ds343887.mlab.com:43887/heroku_qnsz0r7k




// require('../models/posts')


// // mongoose.connect('mongodb+srv://chanlay:chanlay123@yaykyiyar-ajgvf.azure.mongodb.net/yky-blog-api?retryWrites=true&w=majority', {
// //     useNewUrlParser: true
// // }, (err) => { 
// //     if (!err) {
// //         log('MongoDB Connection Succeeded.')
// //     } else {
// //         log('Error in DB connection : ' + err)
// //     }
// // });