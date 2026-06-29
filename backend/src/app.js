import express from "express";

const app = express(); // Create an Express application

app.use(express.json()); // Middleware to parse JSON request bodies

import userRouter from "./routes/user.route.js"; // Import the user router
//import postRouter from "./routes/post.route.js"; // Import the post router

//routes declarations
app.use("/api/v1/users", userRouter); // Use the user router for routes starting with /api/v1/users
//app.use("/api/v1/posts", postRouter); // Use the post router for routes starting with /api/v1/posts

//example route: http://localhost:4000/api/v1/users/register

export default app; // Export the app for use in other files