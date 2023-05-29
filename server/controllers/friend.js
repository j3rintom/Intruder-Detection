
const FriendSchema = require("../models/friendSchema.js")
const ArmedSchema = require('../models/armedSchema.js')
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

exports.changeArmed = async(req,res)=>{
    const id = req.params.id
    const {armed} = req.body
    await ArmedSchema.findOneAndUpdate({id:id},{armed:armed}).then((docs)=>{
        res.send(docs)
    }).catch((err)=>{
        res.send(err)
    })
}
exports.addArmed = async (req, res) => {
    const id = req.params.id;
  
    if (id!=="undefined") {
      try {
        const docs = await ArmedSchema.find({ id: id });
  
        if (docs.length === 0) {
          const user = { id: id };
          const newUser = new ArmedSchema(user);
          await newUser.save();
          res.status(201).json(newUser);
        } else {
          res.status(409).json({ message: "User already exists." });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(400).json({ message: "ID is not defined." });
    }
  };
  

exports.getArmed = async (req,res)=>{
    const id = req.params.id
    await ArmedSchema.find({id:id}).then((docs)=>{
        res.send(docs)

    }).catch((err)=>{
        console.log(err);
    })
}