import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  if (isConnected) {
    console.log("DB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL as string, {
      dbName: "thought_persona",
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export { connectToDB };
