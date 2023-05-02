import express from "express";
import User from "../models/User.js";
import { default as AES } from "crypto-js";
import { verifyTokenAdmin, verifyTokenAuthorization } from "./verifyToken.js";
const router = express.Router();
// const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = verifyToken.js;

/* Updating the user's username. */
router.put("/:id",verifyTokenAuthorization, async (req, res) => {
	if(req.body.password) {
		req.body.password = AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString();
	}
	try {
		const updatedUser = await User.findByIdAndUpdate (req.params.id,{
			$set: req.body
		},
		{
			new: true
		}
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});


/* This is a get request to the user route. It is using the verifyTokenAdmin middleware to verify that
the user is an admin. If the user is an admin, it will return all the users in the database. */
router.get("/stats", verifyTokenAdmin, async(req, res)=> {
	const date = new Date();
	/* Setting the date to a year ago. */
	const lastYear = new Date(date.setFullYear(date.getFullYear()-1));
	try {
		const data = await User.aggregate([
			{$match: {createdAt: {$gte: lastYear} }},
			{$project: {
				month: {$month: "$createdAt"},
			},
			},
			{
				$group: {
					_id: "$month",
					total: {$sum: 1}
				}
			},
		]);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error);
	}
});



/* This is a get request to the user route. It is using the verifyTokenAdmin middleware to verify that
the user is an admin. If the user is an admin, it will return all the users in the database. */
router.get("/", verifyTokenAdmin, async(req, res) => {
	try {
		const user = await User.find();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});


/* This is a delete request to the user route. It is using the verifyTokenAuthorization middleware to
verify that
the user is an admin. If the user is an admin, it will delete the user in the database. */
router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("User has been deleted successfully");
	} catch (error) {
		res.status(500).json(error);
	}
});

/* This is a get request to the user route. It is using the verifyTokenAdmin middleware to verify that
the user is an admin. If the user is an admin, it will return all the users in the database. */
router.get("/:id", verifyTokenAdmin, async (req, res) => {
	try {
		const user = await User.findById(req.params.id); 
		// eslint-disable-next-line no-unused-vars
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (error) {
		res.status(500).json(error);
	}
});



/* This is a get request to the user route. It is using the verifyTokenAdmin middleware to verify that
the user is an admin. If the user is an admin, it will return all the users in the database. */
router.get("/", verifyTokenAdmin, async(req, res)=> {
	// if user want to query atleast 5 users
	const query = req.query.new;
	try {
		const user = query 
			? await User.find().sort({_id: -1}).limit(5) 
			:await User.find();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});





export default router;