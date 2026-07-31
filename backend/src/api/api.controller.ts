import { Request, Response } from "express";

const apiGet = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ msg: "🚀 hello from v1 api" });
};

const apiPost = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ msg: req.body });
};

export { apiPost, apiGet };
