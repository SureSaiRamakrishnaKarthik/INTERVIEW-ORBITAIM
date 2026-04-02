const express = require('express')
const router = express.Router();


const {createUser,getUser,getUserId,deleteUser} = require("./controllers/userController")

const  validateUser = require('./middleware/validateUser');
const { updateUser } = require('../controllers/userController');

router.post('/',validateUser,createUser)
router.get('/',getUser)
router.get('/:id',getUserId)
router.put('/:id', validateUser,updateUser)
router.delete('/:id',deleteUser)

module.exports = router;
