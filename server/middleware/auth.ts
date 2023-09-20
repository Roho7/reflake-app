import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../utils/secret";

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const user = jwt.verify(token, SECRET);
      if (user) {
        next();
      }
    } catch (err) {
      res.clearCookie("token");
      return res.redirect("/null");
    }
  } else {
    res.status(403);
    console.log("error in reading token");
  }
};
