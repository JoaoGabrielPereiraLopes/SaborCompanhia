import "express";

declare global {
  namespace Express {
    interface UserPayload {
      id: number;
      admin: boolean;
      iat: number;
      exp: number;
    }

    interface Request {
      user?: UserPayload;
    }
  }
}