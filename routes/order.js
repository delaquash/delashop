/* eslint-disable no-mixed-spaces-and-tabs */
import express from "express";
import { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } from "./verifyToken";
import { createOrder, deleteOrder, findAllOrder, findOrder, getIncome, updateOrder } from "../controllers/order";
const router= express.Router();

/* This is a post request to the order route. It is using the verifyToken middleware to verify that
the user is logged in. If the user is logged in, it will create a new order in the database. */
router.post("/",verifyToken, createOrder);

/* This is a put request to the order route. It is using the verifyTokenAdmin middleware to verify that

the user is an admin. If the user is an admin, it will update the order in the database. */
router.put("/:id", verifyTokenAdmin,updateOrder);

/* This is a delete request to the order route. It is using the verifyTokenAdmin middleware to verify
that
the user is an admin. If the user is an admin, it will delete the order in the database. */
router.delete("/:id", verifyTokenAdmin, deleteOrder);

/* This is a get request to the order route. It is using the verifyTokenAuthorization middleware to
verify that
the user is logged in. If the user is logged in, it will return all the orders in the database. */
router.get("/find/:userId", verifyTokenAuthorization, findOrder);

/* This is a get request to the order route. It is using the verifyTokenAdmin middleware to verify that

the user is an admin. If the user is an admin, it will return all the orders in the database. */
router.get("/", verifyTokenAdmin, findAllOrder);

/* This is a get request to the order route. It is using the verifyTokenAdmin middleware to verify that
the order is an admin. If the order is an admin, it will return all the orders in the database. */
router.get("/income", verifyTokenAdmin, getIncome);


export default router;