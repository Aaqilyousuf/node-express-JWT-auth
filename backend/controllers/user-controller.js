const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });
const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "User not found 404 error" });
  }
  return res.status(200).json({ users });
};

const Register = async (req, res, next) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    // console.log(req.body);
    return res.status(200).json({ status: "User created successfully" });
  } catch (err) {
    return res.status(404).json({ message: "Soething went wrong " + err });
  }
};

const Login = async (req, res, next) => {
  const secretKey = process.env.SECRET_KEY;
  const { name, email, password } = req.body;
  let loginUser;
  try {
    loginUser = await User.findOne({ email });
    console.log(loginUser);
    if (!loginUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, loginUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Wrong Password!" });
    } else {
      // console.log(req.body);
      console.log(name);
      const token = jwt.sign(
        {
          name,
          email,
        },
        secretKey
      );
      console.log(token);
      return res.status(200).json({
        message: "Login into your account successfully",
        token: token,
      });
    }
  } catch (err) {
    return res.status(404).json({ message: "Something went wrong: " + err });
  }
};
// const getQuote = async (req, res, next) => {
//   const token = req.header["x-access-token"];
//   try {
//     const decoded = jwt.decode(token, secretKey);
//     const email = decoded.email;
//     const user = await User.findOne({ email: email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found!" });
//     }
//     return res.status(200).json({ status: "ok", quote: user.quote });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err });
//   }
// };

// const postQuote = async (req, res, next) => {
//   const token = req.header["x-access-token"];
//   try {
//     const decoded = jwt.decode(token, secretKey);
//     const email = decoded.email;
//     await User.updateOne(
//       {
//         email: email,
//       },
//       { $set: { quote: req.body.quote } }
//     );
//     return res.status(200).json({ status: "ok" });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err });
//   }
// };

module.exports = {
  getAllUser,
  Register,
  Login,
  // getQuote,
  // postQuote,
};
