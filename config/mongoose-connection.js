const mongoose = require('mongoose');

mongoose
.connect("mongodb://127.0.0.1:27017/e-comm")
.then(function(){
    console.log("Connected to MongoDB");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.Connection;