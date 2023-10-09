import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  given: String,
  family: String,
  sequence: String,
  affiliation: Array,
});

const paperSchema = new mongoose.Schema({
  title: Array,
  author: [authorSchema],
  DOI: String,
  URL: String,
  publisher: String,
});

const lakeSchema = new mongoose.Schema({
  lakeName: String,
  dayCreated: Date,
  papers: [paperSchema],
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  lakes: [lakeSchema],
});

export const User = mongoose.model("User", userSchema);
export const Paper = mongoose.model("Paper", paperSchema);
export const Lake = mongoose.model("Lake", lakeSchema);
