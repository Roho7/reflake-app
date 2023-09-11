import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const collectionSchema = new mongoose.Schema({
  paperId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Papers" }],
});

const paperSchema = new mongoose.Schema({
  title: String,
  published: String,
  author: Object,
  DOI: String,
  abstract: String,
  publisher: String,
});

export const User = mongoose.model("User", userSchema);
export const Paper = mongoose.model("Paper", paperSchema);
export const Collection = mongoose.model("Collection", collectionSchema);
