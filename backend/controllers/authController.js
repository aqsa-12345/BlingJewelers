export const login = (req, res) => {
  console.log("Login Request Body:", req.body);
  res.json({ message: "Login request received (check console)" });
};

export const register = (req, res) => {
  console.log("Register Request Body:", req.body);
  res.json({ message: "Register request received (check console)" });
};
