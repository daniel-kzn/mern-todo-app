import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  todoList: [
    {
      todoId: String,
    },
  ],
});

// convert to model
export const User = mongoose.model("User", userSchema);
