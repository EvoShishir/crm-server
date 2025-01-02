import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const auth_token = req.cookies.auth_token;
  if (auth_token == null) return res.status(401).send("Unauthorized");

  jwt.verify(auth_token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send("Forbidden");
    } else {
      req.user = decoded;
      next();
    }
  });
}
