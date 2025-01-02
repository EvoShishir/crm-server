export const logout = (req, res) => {
  res.clearCookie("auth_token");
  res.send("Logged out successfully");
};
