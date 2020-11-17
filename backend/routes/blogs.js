const express = require('express');
const router = express.Router();
const blog = require('../models/blogModel')

router.get('/', (req, res) => {
    blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json(`Error ${err}`))
})

router.post('/add', (req, res) => {
    const newBlogs = new blog({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
    })

    newBlogs.save()
    .then(() => res.json('POST SUCCESSFULY!'))
    .catch(err => res.status(400).json(`Error : ${err}`))
})

router.put('/update/:id', (req, res) => {
    blog.findById(req.params.id)
    .then(blogs => {
        blogs.title = req.body.title;
        blogs.author = req.body.author;
        blogs.content = req.body.content;

        blogs
        .save()
        .then(() => res.json('UPDATE SUCCESSFULY!'))
        .catch(err => res.status(400).json(`Error : ${err}`))
    })
    .catch(err => res.status(400).json(`Error : ${err}`))
})


router.get('/:id', (req, res) => {
    blog.findById(req.params.id)
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json(`Error : ${err}`))
})

router.delete('/:id', (req,res) => {
    blog.findByIdAndDelete(req.params.id)
    .then(() => res.json('DELETED!'))
    .catch(err => res.status(400).json(`Error : ${err}`))
})



module.exports = router;