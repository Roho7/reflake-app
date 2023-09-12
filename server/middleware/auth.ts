import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../utils/secret";

const generateJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header.token;
  console.log(token);
  if (token) {
    try {
      const user = jwt.verify(token, SECRET);
      req.user = user;
      next();
    } catch (err) {
      res.clearCookie("token");
      return res.redirect("/");
    }
  } else {
    console.log("error in reading token");
  }
};

export default generateJwt;
