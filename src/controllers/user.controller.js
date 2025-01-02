export const getMyProfile = (req, res) => {
  res.json(req.user);
};
