import express, { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";
import axios from "axios";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
const port = 3000;

// app.use(express.json());
// app.use(cors);
// app.use(axios);

// const SECRET = "seCr3T";

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const collectionSchema = new mongoose.Schema({
//   paperId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Papers" }],
// });

// const paperSchema = new mongoose.Schema({
//   title: String,
//   published: String,
//   author: Object,
//   DOI: String,
//   abstract: String,
//   publisher: String,
// });

// const User = mongoose.model("User", userSchema);
// const Paper = mongoose.model("Paper", paperSchema);
// const Collection = mongoose.model("Collection", collectionSchema);

// mongoose.connect(
//   "mongodb+srv://rohosen2:Babla123@cluster0.virj8ol.mongodb.net/",
// );

// const generateToken = (user: any) => {
//   const payload = { username: user.username };
//   return jwt.sign(payload, SECRET, { expiresIn: "1h" });
// };

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

// app.post("/signup", async (req: any, res: any) => {
//   const username = req.headers.username;
//   const password = req.body.password;
//   //   const user = await User.findOne({ username });
//   //   if (user) {
//   //     res.send(403).json({ message: "Username taken" });
//   //   } else {
//   //     const obj = { username: username, password: password };
//   //     const newAdmin = new User(obj);
//   //     await newAdmin.save();
//   //     const token = generateToken(username);
//   //     res.json({ message: "account created", token });
//   //   }
//   console.log(username);
// });

// app.post("/signin", async (req: any, res: any) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const user = await User.findOne({ username });
//   if (user) {
//     res.status(403).json({ message: "Username taken" });
//   } else {
//     const obj = { username: username, password: password };
//     const newAdmin = new User(obj);
//     await newAdmin.save();
//   }
// });

app.listen(port, () => {
  console.log("app running on port", port);
});
