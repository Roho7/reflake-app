import { Request, Response } from "express";
import { User } from "../db/database";
import { generateToken } from "../utils/generateToken";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  console.log("user", user);
  if (password != user?.password) {
    return res.status(403).json({ error: "password doesn't match" });
  }
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
};
