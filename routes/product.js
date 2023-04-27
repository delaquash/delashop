import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "../controllers/product.js";
import { verifyTokenAdmin } from "./verifyToken.js";

const router= Router();
/* This is a post request to the server. It is creating a new product. */
router.post("/", verifyTokenAdmin, createProduct);

/* Updating the product. */
router.put("/:id", verifyTokenAdmin, updateProduct);

/* Deleting the product. */
router.delete("/:id", verifyTokenAdmin, deleteProduct);

/* Getting the product by id. */
router.get("/find/:id", getProduct);

/* Getting the products from the database. */
router.get("/", getAllProduct);

export default router;