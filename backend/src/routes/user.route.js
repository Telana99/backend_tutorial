import {Router} from "express";
import {registerUser, loginUser, logoutUser } from "../controllers/user.controller.js";

const router = Router(); // Create a new router instance

router.route('/register').post(registerUser); // Define a POST route for user registration
router.route('/login').post(loginUser); // Define a POST route for user login
router.route('/logout').post(logoutUser); // Define a POST route for user logout

export default router; // Export the router for use in other files