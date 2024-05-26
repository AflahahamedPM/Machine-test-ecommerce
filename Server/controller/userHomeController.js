import userInfo from "../model/userModel.js";

export const homePage = async (req, res) => {
  try {
    console.log("hello");
    res.json({ data: "success" });
  } catch (error) {}
};

export const postSignup = async (req, res) => {
  try {
    console.log(req.body);
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

    const newUser = new userInfo({
      name: name,
      email: email,
      password: password,
    });

    newUser.save();

    res.json({ message: "user added" });
  } catch (error) {
    console.log(error);
  }
};

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await userInfo.findOne({email:email})
    if(!checkUser) res.json({message:"user doens't exist"})
    
    if(checkUser){
        checkUser.password === password ? res.json({message:'succesfully logged in',data:checkUser}) : res.json({message:"password doesn't match"})
    }
    
  } catch (error) {
    console.log(error);
  }
};
