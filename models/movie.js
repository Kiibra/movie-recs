import { text } from 'express'
import mongoose from 'mongoose'

// this is an optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

// define the basic schema for the movie model
const movieSchema = new Schema({
  text: String,
  watched: Boolean,
})

// compile the Schema into model and export it 
const Movie = mongoose.model('Movie', movieSchema)

export{
  Movie
}