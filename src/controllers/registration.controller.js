import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: `${error}` });
  }
};
