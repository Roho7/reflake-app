import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import { verifyJwt } from "./middleware/auth";
import { login } from "./routes/login";
import { signup } from "./routes/signup";
import { User } from "./db/database";
import { createLakes } from "./routes/createLakes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose.connect(
  "mongodb+srv://rohosen2:Babla123@cluster0.virj8ol.mongodb.net/",
);

app.post("/signup", signup);

app.post("/login", login);

// app.get("/", verifyJwt, (req, res) => {
//   res.send(true);
// });

app.post("/paper", verifyJwt, async (req, res) => {
  const { DOI, author, title, publisher, URL } = req.body.paper;
  const lakeName = req.body.lake;
  const username = req.body.username;
  console.log("username", username);
  const user = await User.findOne({ username });
  if (user) {
    const lake = user.lakes.find((c) => c.lakeName === lakeName);
    if (lake) {
      console.log("lake", lake);
      const paper = lake?.papers.find((c) => c.DOI === DOI);
      if (paper) {
        res.status(403).json({ message: "Paper Already Exists" });
      } else {
        res.json({ message: "Paper added", paper });
        lake?.papers.push({ DOI, author, title, publisher, URL });
        await User.updateOne(
          { username: user.username },
          { lakes: lake },
          { $set: { papers: lake?.papers } },
        );
      }
    } else {
      console.log("lake not found");
    }
  } else {
    console.log("user not found");
  }
});

app.post("/lakes", createLakes);

app.post("/viewlakes", async (req: Request, res: Response) => {
  const username = req.body.username;
  const user = await User.findOne({ username });
  if (user) {
    res.send(user.lakes);
  } else {
    res.status(404);
    res.json({ message: "user not found" });
  }
});

app.listen(port, () => {
  console.log("app running on port", port);
});
