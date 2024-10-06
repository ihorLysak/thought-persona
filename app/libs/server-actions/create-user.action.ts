"use server";

import { connectToDB } from "~/app/utils/connect-to-db";
import User from "~/app/models/user";
import bcrypt from "bcrypt";
import { token } from "../modules/token/token";

type Properties = {
  username: string;
  email: string;
  password: string;
};

export const createUser = async ({ username, email, password }: Properties) => {
  await connectToDB();

  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);

  try {
    const newUser = await User.create({
      username,
      email,
      password: passwordHash,
    });

    const authToken = await token.create({
      expirationTime: process.env.JWT_EXPIRATION as string,
      payload: { userId: newUser._id },
    });

    return { payload: authToken };
  } catch (error) {
    console.log(error);
  }
};
