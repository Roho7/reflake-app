import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import { generateJwt } from "./middleware/auth";
import { login } from "./routes/login";
import { signup } from "./routes/signup";
import { Paper } from "./db/database";

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

app.get("/", generateJwt, (req, res) => {
  res.send("Hello");
});

app.post("/paper", generateJwt, async (req, res) => {
  const { DOI, author, title, publisher, URL } = req.body;
  const { token } = req.cookies;
  console.log(token);
  const paper = await Paper.findOne({ DOI });
  if (paper) {
    res.json({ message: "Entry Already Exists" });
  } else {
    const obj = { DOI, author, title, publisher, URL };
    const newPaper = new Paper(obj);
    await newPaper.save();
    res.json({ message: "Paper added", title });
  }
});

app.listen(port, () => {
  console.log("app running on port", port);
});
