const userModel = require ("../models/userModel")
const jwt = require ("jsonwebtoken")
const bcrypt = require ("bcrypt");

const register = async (req, res) => {
    try {
        const data = req.body
        let {firstname, lastname, email, password, gender, country} = data

        if(!firstname) return res.status(400).json("Please enter First name")
        if(!lastname) return res.status(400).json("Please enter Last name")
        if(!email) return res.status(400).json("Please enter email")

        let checkEmail = await userModel.findOne({email})
        if(checkEmail) return res.status(400).json("user aldready register")
        
        if(!password) return res.status(400).json("Please enter password")
        
        const Passregx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,}$/;
        let Password = Passregx.test(password);
        if (!Password) {return res.status(400).json
            (
            "Password must have atleast 1 uppercase\n, 1 lowercase, 1 special charecter\n 1 number and must consist atleast 8 charectors."
            );
        }
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        
        if(!lastname) return res.status(400).json("Please enter lastname")
        // if(!gender) return res.status(400).json("Please enter gender")
        if (!["Male", "Female", "Other"].includes(gender)) {return res.status(400).json("Gender should contain Male.,female.,Other");}
        if(!country) return res.status(400).json("Please enter country name")
        
        const saveData = await userModel.create(data)
        return res.status(201).json(saveData)
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const login = async (req, res) => {
    try {
        let Body = req.body;
        const { email, password } = Body;
        
        if (!email) {
          return res.status(400).json("Please enter email address");
        }
        
        if (!password) {
          return res.status(400).json("Please enter password");
        }
        
        let getUser = await userModel.findOne({  email });
        if (!getUser) return res.status(401).json("Email or Password is incorrect.");
        
        let matchPassword = await bcrypt.compare(password, getUser.password);
        if (!matchPassword) return res.status(401).json("Email or Password is incorrect.");
        
        //token
        
        const token = jwt.sign(
          {
            userId: getUser._id.toString(),
          },
          "secret",
          );
        const { newPassword, ...other } = getUser
        let User = getUser
          
        res.cookie("access_token", token, 
        {
            httpOnly: true, expiresIn : "1h",
        }).status(200).json({User, token});
          
    } catch (error) {
      return res.status(500).json(error.message);
    }
}

const logout = (req, res) => {
    res.clearCookie("access_token", {sameSite : "none", secure:true }).status(200).json( "User has been logged out. ")
};

module.exports = {register, login, logout}