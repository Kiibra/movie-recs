import { movies } from '../data/movie-data.js'

function index(req, res) {
  res.render('movies/index', {
    movies: movies
  })
}


export {
  index,
}