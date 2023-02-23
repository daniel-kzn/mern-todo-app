import express, { Request, Response } from "express";

const todoRouter = express.Router();

// GET : return all todos
todoRouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "ok" });
});

// GET : return one todo
todoRouter.get("/:id", (req: Request, res: Response) => {});

// POST : add a new todo
todoRouter.post("/", (req: Request, res: Response) => {});

// DELETE : delete one workout
todoRouter.delete("/", (req: Request, res: Response) => {});

// PATCH : update one workout
todoRouter.patch("/", (req: Request, res: Response) => {});

export default todoRouter;
