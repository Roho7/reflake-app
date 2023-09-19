import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../utils/secret";

export const generateJwt = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const user = jwt.verify(token, SECRET);
      // res.cookie("token", token);
      if (user) {
        next();
      }
    } catch (err) {
      res.clearCookie("token");
      return res.redirect("/null");
    }
  } else {
    console.log("error in reading token");
  }
};
