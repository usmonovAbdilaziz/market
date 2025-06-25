import express from "express";
import config from "./config/app.js";
import { connectDB } from "./db/server.js";
import { createOwner } from "./db/create.owner.js";
import adminRouter from "./routes/admin.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
await connectDB();
await createOwner();

app.use("/admin", adminRouter);

app.listen(config.PORT, () =>
  console.log("Server running on port", config.PORT)
);
