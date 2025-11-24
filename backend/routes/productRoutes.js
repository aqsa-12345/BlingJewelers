import express from "express";
import { addProduct, removeProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router();

// Routes for products
router.post("/add-product", addProduct);
router.post("/remove-product", removeProduct);
router.post("/update-product", updateProduct);

export const productRoutes = router; // named export
