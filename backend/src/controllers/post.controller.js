import { Post} from "../models/post.model.js";

//create a post
const createPost = async (req,res) => {
    try{
        const { name, description, age} = req.body;
        //basic validation
        if(!name || !description || !age){
            return res.status(400).json({message: "Please provide all required fields"});
        }

        const post = await Post.create({name, description, age});
        res.status(201).json({message: "Post created successfully", post});

    }catch(error){
        console.error("Error creating post:", error);
        res.status(500).json({message: "Error creating post", error: error.message});
    }

}

const getAllPosts = async (req, res) => {
    try{
        const getPosts = await Post.find();
        res.status(200).json({message: "Posts retrieved successfully", getPosts});


    }catch(error){
        console.error("Error retrieving posts:", error);
        res.status(500).json({message: "Error retrieving posts", error: error.message});
    }
}

const getPostById = async (req, res) => {
    try{
        const { id } = req.params;
        const post = await Post.findById(id);
        if(!post){
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json({message: "Post retrieved successfully", post});

    }catch(error){
        console.error("Error retrieving post:", error);
        res.status(500).json({message: "Error retrieving post", error: error.message});
    }
}

const updatePost = async (req, res) => {
    try{
        //basic validation
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({message: "Please provide at least one field to update"});
        }
        // const { id } = req.params;
        // const { name, description, age } = req.body;
        const post = await Post.findByIdAndUpdate(req.params.id,req.body, { new: true });

        if(!post){
            return res.status(404).json({message: "Post not found"});
        }

        res.status(200).json({message: "Post updated successfully", post});

    }catch(error){
        console.error("Error updating post:", error);
        res.status(500).json({message: "Error updating post", error: error.message});
    }
}
const deletePost = async (req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id);
        if(!post){
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json({message: "Post deleted successfully", post});

    }catch(error){
        console.error("Error deleting post:", error);
        res.status(500).json({message: "Error deleting post", error: error.message});
    }
}

export {
createPost,
getAllPosts,
getPostById,
updatePost,
deletePost

};