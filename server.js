const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Connection } = require('./Db/db.js');
const listingsRouter = require('./Router/ListingsRouter.js');
const usersRouter = require('./Router/UsersRouter.js');
const companyRouter = require('./Router/Company.js')
const eventsRouter = require('./Router/Events.js');
const statusRouter = require('./Router/Status.js')
const bannersRouter = require('./Router/Banners.js')
const propertiesRouter = require('./Router/Properties.js')
const categoriesRouter = require('./Router/Categories.js')
const locationsRouter = require('./Router/Locations.js');
const tagsRouter = require('./Router/Tags.js')
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json())
app.use(listingsRouter)
app.use(usersRouter)
app.use(companyRouter)
app.use(eventsRouter)
app.use(statusRouter)
app.use(bannersRouter)
app.use(propertiesRouter)
app.use(categoriesRouter)
app.use(locationsRouter)
app.use(tagsRouter)
Connection();

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Port is listening on port ${port}`)
})

