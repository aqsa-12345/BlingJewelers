export const adminLogin = (req, res) => {
  console.log("Admin Login Request Body:", req.body);
  res.json({ message: "Admin login request received (check console)" });
};
