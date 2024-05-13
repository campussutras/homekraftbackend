import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Extend Request interface to include tokenValue property
declare module "express-serve-static-core" {
  interface Request {
    userToken?: any;
  }
}

export const authCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = await req.cookies.Homekraft;

  if (!token) {
    return res.status(401).json({ error: "User token not found" });
  }

  let decodedToken;
  try {
    // @ts-ignore
    decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
  const id = decodedToken.id;

  if (!id) {
    return res.status(400).json({ error: "Invalid token" });
  }

  // Attach token value to the request object
  req.userToken = decodedToken;

  next();
};
