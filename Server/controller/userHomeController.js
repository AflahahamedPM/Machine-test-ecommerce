import mongoose from "mongoose";
import userInfo from "../model/userModel.js";
import bcrypt from "bcrypt";
import cartCollection from "../model/cartModel.js";

export const homePage = async (req, res) => {
  try {
    console.log("hello");
    res.json({ data: "success" });
  } catch (error) {}
};

export const postSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name.length == 0) res.json({ message: "name is required" });
    if (email.length == 0) res.json({ message: "email is required" });
    if (password.length < 6)
      res.json({
        message: "password is required and should be more than 5 characters",
      });

    const userExist = await userInfo.findOne({ email: email });

    if (userExist) {
      res.json({
        message: "user already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userInfo({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await userInfo.insertMany([newUser]);

    const currnetUser = await userInfo.findOne({ name: name });

    const newCart = await cartCollection({
      customer: new mongoose.Types.ObjectId(currnetUser._id),
    });

    await userInfo.findByIdAndUpdate(currnetUser._id, {
      $set: { cart: new mongoose.Types.ObjectId(newCart._id) },
    });

    await newCart.save();

    res.json({ message: "user added" });
  } catch (error) {
    console.log(error);
  }
};

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await userInfo.findOne({ email: email });
    if (!checkUser) res.json({ message: "user doens't exist" });

    const hashedPassword = await bcrypt.compare(password, checkUser.password);
    console.log(hashedPassword);
    console.log(checkUser.password);

    if (checkUser && hashedPassword) {
      res.json({message:"succesfully logged in", data: checkUser });
    } else {
      res.json({ message: "password doesn't match" });
    }
  } catch (error) {
    console.log(error);
  }
};
