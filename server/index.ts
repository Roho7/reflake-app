import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { generateJwt } from "./middleware/auth";
import { login } from "./routes/login";
import { signup } from "./routes/signup";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://rohosen2:Babla123@cluster0.virj8ol.mongodb.net/",
);

app.get("/paper", (req, res) => {
  const body = req.body;
  res.send(body);
});

app.post("/signup", signup);

app.post("/login", login);

app.get("/", generateJwt, (req, res) => {
  res.send("Hello");
});

app.post("/paper", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send(body);
});

app.listen(port, () => {
  console.log("app running on port", port);
});
