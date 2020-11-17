const express = require('express');
const router = express.Router();
const blog = require('../models/blogModel')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../public/uploads/')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage:storage});

router.get('/', (req, res) => {
    blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json(`Error ${err}`))
})

router.post('/add', upload.single('blogimage'), (req, res) => {
    const newBlogs = new blog({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        blogimage: req.file.originalname
    })
 
    newBlogs.save()
    .then(() => res.json('POST SUCCESSFULY!'))
    .catch(err => res.status(400).json(`Error : ${err}`))
})

router.put('/update/:id', upload.single('blogimage'), (req, res) => {
    blog.findById(req.params.id)
    .then((blogs) => {
        blogs.title = req.body.title;
        blogs.author = req.body.author;
        blogs.content = req.body.content;
        blogs.blogimage = req.file.originalname;

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