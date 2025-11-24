export const submitContact = (req, res) => {
  console.log("Contact Form Submission:", req.body);
  res.json({ message: "Contact form received (check console)" });
};
