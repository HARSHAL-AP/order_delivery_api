const express = require("express");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRoute = express.Router();
const { UserModel } = require("../models/user.model");


userRoute.get("/get",async (req,res) => {
  try {
     const data=await UserModel.find()
     res.status(200).json({
      isError:false,
      data
     })


  } catch (error) {
    res.status(500).json({
      isError: true,
      error,
    });
  }
})









userRoute.post("/register", async (req, res) => {
  const { name, city, password, email } = req.body;
  const user = await UserModel.find({
    email: email,
  });
  if (user.length > 0) {
    res.status(200).json({ msg: "User allready registerd", isError: true });
  } else {
    try {
      bycript.hash(password, 5, async (err, secure_password) => {
        if (err) {
          console.log(err);
        } else {
          const user = new UserModel({
            name,
            city,
            email,
            password: secure_password,
          }); 
          await user.save();
          res
            .status(201)
            .json({ isError: false, message: " User Registerd successfully" });
        }
      });
    } catch (error) {
      res.status(500).json({
        isError: true,
        error,
      });
    }
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.find({ email });
    const hashed_pass = user[0].password;
    if (user.length > 0) {
      bycript.compare(password, hashed_pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ user_id: user[0]._id },"masai");
          res.status(202).json({
            isError: false,
            token,
          });
        } else {
          res.status(401).json({
            isError: true,
            message: "Invalid Credentials",
          });
        }
      });
    } else {
        res.status(401).json({
            isError: true,
            message: "Invalid Credentials",
          });
    }
  } catch (error) {
    res.status(500).json({
        isError: true,
        error
      });
  }
});



module.exports = {
  userRoute,
};
