import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB);
    console.log(`mongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

export { connectDB };
