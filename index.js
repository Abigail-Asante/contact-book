import express from "express";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";

import contactRoute from "./routes/contact_route.js";

// create server
const app = express();

// Database connection
dbConnection();
// apply middlewares
app.use(express.json());

// define route
app.use(contactRoute);



// listen for incoming request
app.listen(3000, () => {
    console.log('App is listening on port 3000')
})