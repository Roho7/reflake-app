import express, { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cors from "cors";
import { User } from "./db/database";

const app = express();
const port = 3000;

app.use(express.json());
// app.use(cors);

const SECRET = "seCr3T";

mongoose.connect(
  "mongodb+srv://rohosen2:Babla123@cluster0.virj8ol.mongodb.net/",
);

const generateToken = (user: Object) => {
  const payload = { user };
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
};

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
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
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({ username });
  res.send(user);
});

app.listen(port, () => {
  console.log("app running on port", port);
});
