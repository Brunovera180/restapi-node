const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { title, director, year, rating }= req.body;
    if ( title && director && year && rating) {
      const id = movies.length + 1;
      const newMovies = {id, ...req.body}
      movies.push(newMovies);
      res.json(newMovies);
    } else {
        res.status(500).json({error: 'Hubo un error.'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating }= req.body;
    if ( title && director && year && rating) {
      _.each(movies, (movies, i) => {
          if( movies.id == id){
              movies.title = title;
              movies.director = director;
              movies.year = year;
              movies.rating = rating;
          }
      });
      res.json(movies);
    } else {
      res.status(500).json({error: 'Todos los campos son reqieridos.'});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id){
            movies.splice(i, 1);
        }
    });
    res.send(movies);
});

module.exports = router;
