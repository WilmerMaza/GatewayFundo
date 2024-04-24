import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/ValidEnvironment";

const verifyToken = (req: Request, res: Response, next: NextFunction): any => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Authorization header is required" });
  }

  const token = authHeader.split(" ")[1]; // Bearer TOKEN_HERE

  jwt.verify(
    token,
    JWT_SECRET,
    (err: any, decoded: Express.User | undefined): any => {
      if (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
      }

      req.user = decoded;
      next();
    }
  );
};

export default verifyToken;
