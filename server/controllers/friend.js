
const FriendSchema = require("../models/friendSchema.js")

exports.getUsers = async (req,res) =>{
    const id = req.params.id
    await FriendSchema.find({id:id}).then((docs)=>{
        res.send(docs)
    }).catch((err)=>{
        res.send("users not found",err)
    })
    
}
exports.addUser = async(req,res) =>{
    const id = req.params.id
    const {name} = req.body
    const user = {id:id,name:name}
    const newUser = FriendSchema(user)
    try {
        newUser.save()
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

exports.deleteUser = async (req,res) =>{
    const id = req.params.id
    
    await FriendSchema.findOneAndDelete({_id:id}).then((docs)=>{
        res.send(docs)
    }).catch((err)=>{
        res.send(err)
    })
}
