import express from "express";
import apartmentRoutes from "./routes/apartmentRoutes";
import cors from "cors";
import connectDB from "./database/database";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/apartments", apartmentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDB();

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
