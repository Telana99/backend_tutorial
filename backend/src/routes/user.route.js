import {Router} from "express";
import {registerUser, loginUser} from "../controllers/user.controller.js";

const router = Router(); // Create a new router instance

router.route('/register').post(registerUser); // Define a POST route for user registration
router.route('/login').post(loginUser); // Define a POST route for user login

export default router; // Export the router for use in other files