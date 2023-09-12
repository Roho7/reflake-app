import express, { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { User } from "./db/database";
import { SECRET } from "./utils/secret";
import generateJwt from "./middleware/auth";

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://rohosen2:Babla123@cluster0.virj8ol.mongodb.net/",
);

const generateToken = <T>(user: T) => {
  const payload = { user };
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
};

app.post("/signup", async (req: Request, res: Response) => {
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
});

app.post("/signin", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (password != user?.password) {
    return res.status(403).json({ error: "password doesn't match" });
  }
  const token = generateToken({ username, password });
  console.log({ username, password });
  // res.cookie("token", token, {
  //   httpOnly: true,
  // });
  return res.json({ message: "successful login", token });
});

app.get("/", generateJwt, (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("app running on port", port);
});
