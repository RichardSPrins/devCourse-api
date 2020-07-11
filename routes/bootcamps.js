const express = require('express')
const bootcampController = require('../controllers/bootcampController')

const router = express.Router()

router.get('/', bootcampController.getBootcamps)

router.get('/:id', bootcampController.getBootcampById)

router.post('/', bootcampController.createBootcamp)

router.put('/:id', bootcampController.updateBootcamp)

router.delete('/:id', bootcampController.deleteBootcamp)

module.exports = router