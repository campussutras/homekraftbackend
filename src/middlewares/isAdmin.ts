import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare module "express-serve-static-core" {
  interface Request {
    tokenValue?: any;
  }
}
export const adminCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies.Homekraft;

  if (!accessToken) {
    return res.status(401).json({ error: "Access token not found" });
  }

  let decodedToken;

  try {
    // @ts-ignore
    decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }

  const id = decodedToken.id;
  const isAdmin = decodedToken.isAdmin;

  if (!id) {
    return res.status(400).json({ error: "Invalid access token" });
  } else if (!isAdmin) {
    return res
      .status(403)
      .json({ error: "You are not authorized to access this resource" });
  }

  // Attach token value to the request object
  req.tokenValue = decodedToken;

  next(); // Proceed to the next middleware
};
