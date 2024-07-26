import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/nawy";
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Nawy Database connected successfully");
  } catch (error) {
    console.error("Error connecting to Nawy Database:", error);
    process.exit(1);
  }
};

export default connectDB;
