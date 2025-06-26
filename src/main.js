import express from "express";
import config from "./config/app.js";
import { connectDB } from "./db/server.js";
import { createOwner } from "./db/create.owner.js";
import adminRouter from "./routes/admin.routes.js";
import clentRouter from "./routes/clent.routes.js";
import salesRouter from "./routes/salesman.routes.js";
import productRouter from "./routes/products.routes.js";
import categoryRouter from "./routes/category.routes.js";
import solidProductRouter from "./routes/solidProduct.routes.js";

import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
await connectDB();
await createOwner();

app.use("/admin", adminRouter);
app.use("/clent", clentRouter);
app.use("/product", productRouter);
app.use("/salesman", salesRouter);
app.use("/category", categoryRouter);
app.use("/solid-product", solidProductRouter);

app.use((error, req, res, next) => {
  const statusCode = error.status ? error.status : 500;
  const message = error.message ? error.message : "Internal server error";
  return res.status(statusCode).json({
    statusCode,
    message,
  });
});

app.listen(config.PORT, () =>
  console.log("Server running on port", config.PORT)
);
