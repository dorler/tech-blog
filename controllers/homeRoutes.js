const router = require('express').Router();
const {User, Post, Comment} = require("../models");

router.use('/', async (req, res) => {
    try {
        //get all the posts
        const allPosts = await Post.findAll({});
        //format the posts
        const posts = allPosts.map((post) => {
            return post.get({plain: true});
        });
        //send posts
        res.render("posts", { posts });
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;

