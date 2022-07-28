import User from "../models/users";
const bcrypt = require("bcrypt");

export const signUp = async (req, res) => {
  const { username, email, password, roll } = req.body;
  const saltRound = 15;
  const passEncripted = bcrypt.hashSync(password, saltRound);
  console.log(passEncripted);

  const newUser = new User({
    username,
    email,
    password: passEncripted,
    roll,
  });

  res.json(newUser, "signIn we");
};

export const signIn = async (req, res) => {
  res.json("signin");
};
