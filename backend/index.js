import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.route.js";
 import companyRoutes from "./routes/company.route.js";
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoutes);

app.use("/api/v1/company", companyRoute);


// pehle DB connect karo, phir server start karo

  app.listen(PORT, () => {
    connectDB();
    console.log(`✅ Server is running at port ${PORT}`);
  });

