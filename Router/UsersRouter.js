const express  = require('express');
const { updateUser,createUser,getAllUsers,deleteUser,loginUser,getUserByName }  = require('../Controller/UsersController.js');
const router = express.Router();
router.get('/api/allusers',getAllUsers);
router.post('/api/createuser',createUser);
router.delete('/api/deleteuser/:id',deleteUser);
router.get('/api/userid/:name',getUserByName);
router.put('/api/updateuser/:id', updateUser);
router.put('/api/loginuser', loginUser)
module.exports = router