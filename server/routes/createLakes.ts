import { Request, Response } from "express";
import { User } from "../db/database";

export const createLakes = async (req: Request, res: Response) => {
  const { lakeName, username } = req.body;
  console.log("username", username);
  const user = await User.findOne({ username });
  if (user) {
    const lake = user.lakes.find((c) => c.lakeName === lakeName);
    if (lake) {
      res.json({ message: "Lake exists" });
    } else {
      let date = new Date();
      user.lakes.push({ lakeName: lakeName, dayCreated: date });
      await User.updateOne(
        { username: user.username },
        { $set: { lakes: user.lakes } },
      );
      res.send("new lake created succesfully");
    }
  }
};
