import "reflect-metadata";
import express from "express";
import cors from "cors";
import { router as Routes } from "./routes/Routes";
import { connectionDB } from "./constants/connectionDB";
const PORT: number = Number(process.env.PORT) || 8080;
const URL_GENERAL: string = process.env.URL_GENERAL || "http:127.0.0.1:";

// create and setup express app
async function main() {
  const app = express();
  app.use(cors());

  const connection = await connectionDB();
  if (!connection) {
    return;
  }

  app.use("/api/v1/topic", Routes);
  // app.use("/bosco/clock", Routes);
  
  app.listen(PORT, () =>
    console.log(`server running on ${URL_GENERAL + PORT}`)
  );
}

main();
