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

app.post("/paper", async (req, res) => {
  const paperData = req.body?.paper;
  console.log(paperData);
  const lakeName: string = req.body.lake;
  const username = req.body.username;
  const user = await User.findOne({ username });
  if (user) {
    console.log("user Found");
    const lake = user.lakes.find((c) => c.lakeName === lakeName);
    if (lake) {
      console.log("lake found");
      const paper = lake?.papers.find((c) => c.DOI === paperData.DOI);
      if (paper) {
        res.status(403).json({ message: "Paper Already Exists" });
      } else {
        const newPaper = {
          DOI: paperData.DOI,
          author: paperData.author,
          title: paperData.title,
          publisher: paperData.publisher,
          URL: paperData.URL,
        };
        lake.papers.push(newPaper);

        await user.save();
        console.log("paper added");
        res.json({ message: "Paper added", paper });
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

app.get("/lakes/:lakeId", async (req, res) => {
  try {
    const lakeName = req.params.lakeId;
    const user = await User.findOne({ "lakes.lakeName": lakeName });
    if (!user) {
      return res.status(404).json({ message: "Lake not found" });
    }
    const lake = user.lakes.find((l) => l.lakeName === lakeName);
    if (!lake) {
      return res.status(404).json({ message: "Lake not found" });
    }
    res.json({ lake });
  } catch (error) {
    console.error("Error fetching lake data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log("app running on port", port);
});
