const express = require('express');
const dotenv = require('dotenv') ;
const cors = require('cors') ;
const { Connection } = require('./Db/db.js') ;
const listingsRouter = require('./Router/ListingsRouter.js') ;
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());
app.use(listingsRouter)
Connection();
const port  = process.env.PORT;
app.listen(port,()=>{
    
    console.log(`Port is listening on port ${port}`)
})

