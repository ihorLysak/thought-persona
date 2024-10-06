import { BaseToken } from "./base-token.module";

const token = new BaseToken<{ userId: number }>({
  alorithm: process.env.JWT_ALGORITHM as string,
  secret: Buffer.from(process.env.JWT_ALGORITHM as string),
});

export { token };
