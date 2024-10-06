import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: [true, "user with this name already exists!"],
    required: [true, "username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters!",
    ],
  },
  email: {
    type: String,
    unique: [true, "user with this email already exists!"],
    required: [true, "email is required!"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "this email is invalid",
    ],
  },
  password: {
    type: String,
    required: [true, "password is required!"],
  },
});

const User = models.User || model("User", userSchema);

export default User;
