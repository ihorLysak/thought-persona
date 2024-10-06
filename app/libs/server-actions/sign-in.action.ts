"use server";

import { connectToDB } from "~/app/utils/connect-to-db";
import User from "~/app/models/user";
import bcrypt from "bcrypt";

type Properties = {
  email: string;
  password: string;
};

const signIn = async ({ email, password }: Properties) => {
  await connectToDB();

  try {
    const targetUser = await User.findOne({ email });

    if (!targetUser) {
      throw new Error("User with this email was not found");
    }

    const isCorrectPassword = bcrypt.compareSync(password, targetUser.password);

    if (!isCorrectPassword) {
      throw new Error("Incorrect password");
    }

    return { payload: targetUser._id };
  } catch (error) {
    console.log(error);
  }
};

export { signIn };
