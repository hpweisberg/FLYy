import { Router } from 'express'
import * as journeyCtrl from '../controllers/journey.js'

const router = Router()

// GET /journey/
router.get('/', journeyCtrl.index)

// GET /journey/
router.get('/new/', journeyCtrl.new)

// GET /flights/:id
router.get('/:id', journeyCtrl.show)

// POST /journey/
router.post('/', journeyCtrl.create)

// PUT /journey/:id
router.put('/:id', journeyCtrl.update)


export {
  router
}
