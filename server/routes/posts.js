// posts.js

import express from "express";
import { getFeedPosts, getUserPosts, likePost, createComment } from "../controllers/posts.js"; // Import the controller function for creating comments
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

/* CREATE COMMENT */
router.post("/:id/comment", verifyToken, createComment);

export default router;
