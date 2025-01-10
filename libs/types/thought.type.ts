import { User } from "./user.type";
import { ThoughtLikes } from "./thought-likes.type";

type Thought = {
  author: User;
  id: string;
  text: string;
  likes: ThoughtLikes[];
};

export { type Thought };
