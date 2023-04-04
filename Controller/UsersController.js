const { Users } = require("../Model/UsersModel.js");

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
  };

  const loginUser = async (req, res) => {
    const {email,password} = req.body;
    
    try {
        const user = await Users.findOne({email:email});
        if(!user) return res.json("This user is not registered");
        if(password !== user.password) return res.json("Password is not correct");
        return res.status(200).json({message:"User logged in succesfully",user:user})
        
    } catch (error) {
        return res.json("Error:",error.message)
        
    }
}

  
const createUser = async (req, res) => {
    const {name,surname,email,password} = req.body;
    const user = await Users.findOne({email:email});
    if(user) return res.json("This user already exsist");
    const newUser = new Users({
        name:name,
        surname:surname,
        email:email,
        password:password,
        isAdmin:false
    })
    newUser.save();
    return res.status(200).json({message:"User added succesfully",data:newUser})
}

  const updateUser = async (req, res) =>  {
    const user_id = req.params.id;
    const {name,surname,email,password,isAdmin} = req.body;
    try {
        await Users.findById(user_id,(err,updated)=>{
            updated.name = name ? name : updated.name,
            updated.surname = surname ? surname : updated.surname,
            updated.email = email ? email : updated.email,
            updated.password = password ? password : updated.password,
            updated.isAdmin = isAdmin
            updated.save();
            return res.status(200).json({message:`${user_id} user updated succesfully`})
    
        })
        
    } catch (error) {
        console.log("error at update user")
        
    }
    
}
  const deleteUser = async (req, res) => {
    try {
      const user = await Users.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.remove();
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  module.exports = {
    deleteUser,
    getAllUsers,
    updateUser,
    loginUser,
    createUser
  }