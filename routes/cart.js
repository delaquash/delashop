import express from "express";
import { createCart, deleteCart, getAllCart, getCart, updateCart } from "../controllers/cart";
import { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } from "./verifyToken";
const router= express.Router();

router.post("/",verifyToken,createCart);

router.put("/:id", verifyTokenAuthorization, updateCart);

router.delete("/:id", verifyTokenAuthorization, deleteCart);

router.get("/find/:userId", verifyTokenAuthorization, getCart);

router.get("/", verifyTokenAdmin, getAllCart);


export default router;