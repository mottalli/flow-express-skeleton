//@flow
import express from "express";
import type { $Application, $Request, $Response } from "express";

const app: $Application = express();

app.get(
  "/",
  (req: $Request, res: $Response): void => {
    res.json({ message: "Hello world" });
  },
);

export default app;
