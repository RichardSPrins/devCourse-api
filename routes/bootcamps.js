const express = require('express')
const { getBootcamps, getBootcampById, createBootcamp, updateBootcamp, deleteBootcamp } = require('../controllers/bootcampController')

const router = express.Router()

router.get('/', getBootcamps)

router.get('/:id', getBootcampById)

router.post('/', createBootcamp)

router.put('/:id', updateBootcamp)

router.delete('/:id', deleteBootcamp)

module.exports = router