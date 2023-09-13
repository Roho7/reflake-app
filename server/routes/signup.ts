import { Request, Response } from "express";

import { User } from "../db/database";
import { generateToken } from "../utils/generateToken";

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.json({ message: "Username taken" });
  } else {
    const obj = { username: username, password: password };
    const newAdmin = new User(obj);
    await newAdmin.save();
    const token = generateToken(obj);
    res.json({ message: "account created", token });
  }
};
