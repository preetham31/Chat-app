import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 5001;
dotenv.config();
app.use(express.json());
const URI = process.env.MONGODB_URI;
// app.get("/", (req, res) => {
//   res.send("hello world");
// });
try {
  mongoose.connect(URI);
  console.log("MongoDB connected");
} catch (error) {
  console.log(error);
}

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is runnning on port ${PORT}`);
});
