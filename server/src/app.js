import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.routes.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1", healthRouter);
// app.use("/api/v1/health", healthRouter);

app.use(errorHandler);

export { app };
