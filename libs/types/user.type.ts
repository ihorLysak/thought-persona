import { Thought } from "./thought.type";
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  thoughts: Thought[];
};

export { type User };
