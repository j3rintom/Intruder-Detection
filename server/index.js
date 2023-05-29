const express = require('express')
const cors = require('cors')
var mongoose = require('mongoose')
const app = express()
const friendRoutes = require("./routes/friend.js")
const armRoutes = require("./routes/arm.js")
app.use(express.json())
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions))
app.use("/friend",friendRoutes)
app.use("/arm",armRoutes)
app.get("/",(req,res)=>{s
    res.send("Hello World")
})





var port = process.env.PORT || 5000

mongoose.connect("mongodb+srv://anjali:anjali@friends.kqaeq6d.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        app.listen(port, err => {
            if (err)
                throw err
            console.log('Server listening on port', port)
        })
    });