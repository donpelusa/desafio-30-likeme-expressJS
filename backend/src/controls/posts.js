const Post = require('../models/post')

const addPostDB = async (req, res) => {
    const {title, url, description} = req.body
    try {
        const response = await Post.addPost(title, url, description)
        res.status(200).json({
            msg: "Post Agregado con Exito!",
            data: response
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
  }
};

const listPostDB = async (req, res) => {
    try {
        const posts  = await Post.ListPost()
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ error: err.message });
      }
};

const likePost = async (req, res) => {
    const { id } = req.params
    try {
        const response = await Post.likePost(id)
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({ error: err.message });
  }
}

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Post.deletePost(id);
        res.status(200).json(response)
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

module.exports = {
    addPostDB: addPostDB, listPostDB, likePost, deletePost
}