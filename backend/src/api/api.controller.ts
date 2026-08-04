import { Request, Response } from "express";

const apiGet = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message:"Server is running" });
};

export {apiGet };
