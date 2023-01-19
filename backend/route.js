const express = require('express');
const route = express.Router()
const userController = require ("./controllers/userController")

route.get("/", (req,res) => {
    return res.json("Api is working")
})

route.post("/register", userController.register)
route.post("/login", userController.login)
route.post("/logout", userController.logout)

module.exports = route