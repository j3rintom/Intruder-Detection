const mongoose =require("mongoose")

const friendSchema = mongoose.Schema({
    id:String,
    name:String
});


const FriendSchema = mongoose.model('FriendSchema',friendSchema)

module.exports = FriendSchema
