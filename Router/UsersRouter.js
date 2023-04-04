const express  = require('express');
const { updateUser,createUser,getAllUsers,deleteUser,loginUser }  = require('../Controller/UsersController.js');
const router = express.Router();
router.get('/api/allusers',getAllUsers);
router.post('/api/createuser',createUser);
router.delete('/api/deleteuser/:id',deleteUser);
router.put('/api/updateuser/:id', updateUser);
router.put('/api/loginuser', loginUser)
module.exports = router