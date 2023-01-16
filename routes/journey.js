import { Router } from 'express'
import * as journeyCtrl from '../controllers/journey.js'

const router = Router()

// GET /journey/
router.get('/', journeyCtrl.index)

// GET /journey/
router.get('/new/', journeyCtrl.new)

// GET /journey/:id
router.get('/:id', journeyCtrl.show)

// GET /journey/:id/edit
router.get('/:id/edit', journeyCtrl.edit)

// POST /journey/
router.post('/', journeyCtrl.create)

// PUT /journey/:id
router.put('/:id', journeyCtrl.update)

// DELETE /journey/:id
router.delete('/:id', journeyCtrl.delete)

export {
  router
}
