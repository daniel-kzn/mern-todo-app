import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  author: String,
  title: String, // shorthand for {type: Strings}
  description: String,
  categorie: String,
  finish: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);
