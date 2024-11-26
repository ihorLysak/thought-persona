import { User } from "./user.type";

type Thought = {
  author: User;
  id: string;
  text: string;
  likes: number;
};

export { type Thought };
