import { movies } from '../data/movie-data.js'
import { Movie } from '../models/movie.js'

function index(req, res) {
  res.render('movies/index', {
    movies: movies
  })
}
function newMovie(req, res){
  res.render('movies/new')
}
function create(req, res){
  console.log(req.body)
  req.body.watched = false
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
  create,
}