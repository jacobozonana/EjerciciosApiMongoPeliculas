const express = require('express');
const router = express();

const Movies = require('../models/Movies')

router.get('/movies', (req, res)=>{
    Movies.find()
    .then ((resDB)=> res.status(200).json(resDB))
    .catch((err) => res.status(400).json(err))
})

router.get('/movies/:id', (req, res)=>{
    Movies.findById(req.params.id)
    .then ((resDB)=> res.status(200).json(resDB))
    .catch((err) => res.status(400).json(err))
})

router.post('/movies', (req, res)=>{
    const { body } = req;
    const newMovie = new Movies(body)
    newMovie.save()
    .then((respDB)=> res.status(201).json(respDB))
    .catch((err)=> res.status(400).json(err))
})
router.patch('/movies/:id', (req, res)=>{
    const { body } = req;
    Movies.findByIdAndUpdate(req.params.id, body, {new: true })
    .then ((resDB)=> res.status(201).json(resDB))
    .catch((err) => res.status(400).json(err))
})

router.delete('/movies/:id', (req, res)=>{
    Movies.findByIdAndDelete(req.params.id)
    .then((respDB)=> res.status(204).json(respDB))
    .catch((err)=> res.status(400).json(err));
});


module.exports = router;