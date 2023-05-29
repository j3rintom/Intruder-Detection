const mongoose =require("mongoose")

const armedSchema = mongoose.Schema({
    id:String,
    armed:{
        type:Boolean,
        default:false
    }
});


const ArmedSchema = mongoose.model('ArmedSchema',armedSchema)

module.exports = ArmedSchema
