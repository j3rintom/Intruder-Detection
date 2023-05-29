const express=  require("express")
const router  = express.Router()
const {changeArmed,addArmed, getArmed}  = require("../controllers/friend.js")


router.post('/:id',addArmed)
router.get('/:id',getArmed)
router.patch('/:id',changeArmed)
module.exports = router;
