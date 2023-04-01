const mongoose = require("mongoose") ;
const dotenv = require('dotenv') ;
mongoose.set('strictQuery', true);
dotenv.config();

const Connection = () => {
    const connection_url = process.env.CONNECTION_URL;
    mongoose.connect(connection_url,()=>{
        console.log("Db is connected succesfully!...")
    })
}
module.exports=  {
    Connection
}