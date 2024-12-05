import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const secretKey = process.env.JWT_PRIVATE_KEY; // Replace with your own secret key
  const options = {
    expiresIn: "1h", // Token expiration time
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
};
