const express=  require("express")
const router  = express.Router()
const {getUsers,addUser,deleteUser}  = require("../controllers/friend.js")

router.get('/:id',getUsers)
router.post('/:id',addUser)
router.delete('/:id',deleteUser)

module.exports = router;
