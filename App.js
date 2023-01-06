const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const corsOptions = {
    origin: "*",
    
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

//Routes Imports


const client = require("./routes/ClientRoute");
app.use("/api/v1",client);







module.exports = app;

