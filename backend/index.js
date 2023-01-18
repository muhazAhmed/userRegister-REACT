const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const cors = require('cors');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const route = require('./route');
require("dotenv").config();

app.use(express.json())
app.use(cors())
app.use(multer().any())
app.use(cookieParser())
app.use("/", route)

mongoose.connect( process.env.DB , {useNewUrlParser:true})
.then(() => {
    console.log("MongoDB is connected...")
}).catch((err) => {
    console.log(err.message)
});


app.listen (8800, () => {
    console.log("Server is running on port 8800")
} )