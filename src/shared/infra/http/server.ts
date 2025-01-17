import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import "express-async-errors";
import { AppError } from "../../errors/AppError";
import "../container";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen("3333", () => console.log("server online..."));
