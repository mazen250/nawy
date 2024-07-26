import connectDB from "./database";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import Apartment from "../models/Apartment";

const seedData = async () => {
  try {
    const seedFilePath = path.join(__dirname, "seed.json");
    const seedFileContent = fs.readFileSync(seedFilePath, "utf-8");
    const seedData = JSON.parse(seedFileContent);

    await Apartment.deleteMany({});
    await Apartment.insertMany(seedData);

    console.log("Data seeded successfully.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};
const run = async () => {
  await connectDB();
  await seedData();
};
run();
