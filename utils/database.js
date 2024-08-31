import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yousufali06296:DDXqKMr7hrp2B8k3@cluster0.gj7zf.mongodb.net/",
      { useNewUrlParser: true }
    );
    console.log("MongoDB database connected ");
  } catch (error) {
    console.error("Error while connecting database " + error.message);
  }
};
