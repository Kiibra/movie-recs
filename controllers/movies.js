import { movies } from '../data/movie-data.js'
import { Movie } from '../models/movie.js'

function index(req, res) {
  res.render('movies/index', {
    movies: movies,
    date: req.date
  })
.catch(error => {
  console.log(error)
  res.redirect('/')
})
}

function newMovie(req, res){
  res.render('movies/new')
}

function show(req, res){
  Movie.findById(req.params.movieId)
  .then(movie => {
    res.render('movies/show', {
      movie: movie
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/movies')
  })
}

function create(req, res){
  // console.log(req.body)
  req.body.done = false
  Movie.create(req.body)
  .then(movie => {
    res.redirect('/movies')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/movies')
  })
}


export {
  index,
  newMovie as new,
  show,
  create,
}