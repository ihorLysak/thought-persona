import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  text: {
    type: String,
    required: [true, "cannot create a post without text content"],
  },
  likes: {
    type: Number,
    default: 0,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "cannot create a post without an author"],
  },
});

const Post = models.post || model("Post", postSchema);

export { Post };
