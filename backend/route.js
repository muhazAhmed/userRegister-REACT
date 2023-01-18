const express = require('express');
const route = express.Router()

route.get("/", (req,res) => {
    return res.json("Api is working")
})

module.exports = route