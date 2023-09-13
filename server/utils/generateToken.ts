import { SECRET } from "./secret";
import jwt from "jsonwebtoken";

export const generateToken = (user: object) => {
  const payload = { user };
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
};
