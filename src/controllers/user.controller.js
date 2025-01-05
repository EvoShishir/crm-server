import { User } from "../models/user.model.js";

export const getMyProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({
      success: true,
      user,
    });
    res;
  } catch (error) {
    next(error);
  }
};
