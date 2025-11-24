export const addProduct = (req, res) => {
  console.log("Add Product Submission:", req.body);
  res.json({ message: "Product data received (check console)" });
};

export const removeProduct = (req, res) => {
  console.log("Backend: Remove Product Request Body:", req.body);
  res.json({
    message: `Product with ID "${req.body.productId}" removed successfully.`
  });
};

export const updateProduct = (req, res) => {
  console.log("Backend: Update Product Request Body:", req.body);
  res.json({
    message: `Product with ID "${req.body.productId}" updated successfully!`
  });
};
