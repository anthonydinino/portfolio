const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
router.use(express.json());

//connect to DB
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) console.error(err.message);
  else console.log("connected to DB!");
});

let commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
});

const Comment = mongoose.model("Comment", commentSchema);
router.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ timestamp: -1 });
    res.json(comments);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/comments", async (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    comment: req.body.comment,
  });
  try {
    const savedComment = await comment.save();
    res.json(savedComment);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
