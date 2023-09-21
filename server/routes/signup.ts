import { Request, Response } from "express";
import { User } from "../db/database";
import { generateToken } from "../utils/generateToken";

export const signup = async (req: Request, res: Response) => {
  const { username, password, confirmation } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.json({ message: "Username taken" });
  } else if (confirmation != password) {
    res.json({ message: "password doesn't match" });
  } else {
    const token = generateToken({ username, password });
    res.cookie("token", token, {
      httpOnly: true,
    });
    res.cookie("username", username, {
      httpOnly: true,
    });
    res.send({
      token: token,
    });
    const newAdmin = new User({ username, password });
    await newAdmin.save();
    res.json({ message: "account created", token });
  }
};
