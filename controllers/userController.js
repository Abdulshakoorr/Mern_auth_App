import { userModel } from "../models/user.js";
import bcrypt from "bcryptjs";
// create user
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "All fields are required must be enter data for all fields",
      });
    }
    // hashing password
    const hashPassword = bcrypt.hashSync(password, 10);
    // hashed password
    const newUser = new userModel({
      username,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json({
      status: "success",
      message: `user created successfully  ${username}`,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

// all users
export const allUsers = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json({
      status: "success",
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

// single user
export const singleUser = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `user id : ${id}`,
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `user updated id : ${id}`,
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: `user deleted id : ${id}`,
  });
};
