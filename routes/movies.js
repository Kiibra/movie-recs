import { Router } from 'express'
// import the Controller in order to have access to its actions
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

// GET localhost:3000/movies
router.get('/', moviesCtrl.index)


export { router }
