import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  author: String,
  title: String, // shorthand for {type: Strings}
  description: String,
  categorie: String,
  finish: Boolean,
});

// convertion en model
export const Todo = mongoose.model("Todo", todoSchema);
