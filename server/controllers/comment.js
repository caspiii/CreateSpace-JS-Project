import Post from "../models/Post.js"; // Import your Post model

export const createComment = async (req, res) => {
    const { postId } = req.params;
    const { userId, text } = req.body;
  
    try {
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      const newComment = {
        userId,
        text,
      };
  
      post.comments.push(newComment);
      const updatedPost = await post.save();
  
      res.status(201).json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };