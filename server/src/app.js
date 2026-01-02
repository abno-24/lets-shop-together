import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.routes.js";

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

export { app };
