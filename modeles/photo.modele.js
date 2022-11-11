

const mongoose = require('mongoose') ;

const photoSchema = mongoose.Schema({
    username : String, 
    contentType : String, 
    image : Buffer, 
    date: Date, 
})


module.exports = mongoose.model("Photo", photoSchema);
