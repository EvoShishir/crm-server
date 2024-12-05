import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    const token = generateToken({
      _id: user._id,
      name: user.name,
      role: user.role,
    });

    res.cookie("auth_token", token, {
      httpOnly: true, // Prevent access via JavaScript
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict", // Prevent CSRF attacks
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.json({ success: true, user, token });
  } catch (error) {
    res.status(400).json({ success: false, message: `${error}` });
  }
};
