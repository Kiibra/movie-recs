import { movies } from '../data/movie-data.js'

function index(req, res) {
  res.render('movies/index', {
    movies: movies
  })
}
function newMovie(req, res){
  res.render('movies/new')
}

export {
  index,
  newMovie as new,
}