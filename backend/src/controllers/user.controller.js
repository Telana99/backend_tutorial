import {User} from "../models/user.model.js";

const registerUser = async  (req, res) => {
    try{
        const {username, password, email} = req.body;

        // basic validation
        if(!username || !password || !email){
            return res.status(400).json({message: "Please provide all required fields"});
        }

        //check if user already exists
        const existingUser = await User.findOne({email: email.toLowerCase()});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }

        //create new user
        const user = await User.create({
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: password,
            loggedIn: false,
        });
        res.status(201).json({message: "User registered successfully", user: {id: user._id, email: user.email, username: user.username}});


    }catch(error) {
        console.error("Register error:", error); 
        return res.status(500).json({message: "Internal server error"});
    }
};

const loginUser = async(req,res) => {
    try{
        //checking user already exists
        const {email, password} = req.body;
        const user = await User.findOne({
            email: email.toLowerCase(),

        });
        if(!user) return res.status(400).json({message: "User does not exist"});

        //compare the password
        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});

        res.status(200).json({message: "User logged in successfully", user: {id: user._id, email: user.email, username: user.username}});
        


    }catch(error){
       console.error("Login error:", error);
       return res.status(500).json({message: "Internal server error"});


    }
};

const logoutUser = async(req, res) => {
    try{
        const { email} = req.body;
        const user = await User.findOne({email: email.toLowerCase()});
        if(!user) return res.status(400).json({message: "User does not exist"});

        res.status(200).json({message: "User logged out successfully", user: {id: user._id, email: user.email, username: user.username}});

    }catch(error){
        console.error("Logout error:", error);
        return res.status(500).json({message: "Internal server error"});

    }
}

export {
    registerUser,
    loginUser,
    logoutUser
};