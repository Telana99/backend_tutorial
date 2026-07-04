import {Router} from "express";
import { createPost, getAllPosts, getPostById, updatePost, deletePost } from "../controllers/post.controller.js";

const router = Router(); // Create a new router instance
router.route('/create').post(createPost); // Define a POST route for creating a post
router.route('/all').get(getAllPosts); // Define a GET route for retrieving all posts
router.route('/all/:id').get(getPostById); // Define a GET route for retrieving a single post by ID
router.route('/update/:id').patch(updatePost); // Define a PATCH route for updating a post by ID
router.route('/delete/:id').delete(deletePost); // Define a DELETE route for deleting a post by ID

export default router; // Export the router for use in other files