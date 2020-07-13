/*
@desc:      Get All Bootcamps
@route:     GET /api/v1/bootcamps
@access:    Public
*/ 

exports.getBootcamps = async (req, res, next) => {
  res.status(200).json({
    success: true, 
    msg: "Show all bootcamps.",
    data: req.hello
  })
  next()
}

/*
@desc:      Get A Bootcamp by id
@route:     GET /api/v1/bootcamps/:id
@access:    Private
*/ 

exports.getBootcampById = async (req, res, next) => {
  res.status(200).json({
    success: true, 
    msg: `Show bootcamp ${req.params.id}.`
  })
  next()
}

/*
@desc:      Add new Bootcamp
@route:     POST /api/v1/bootcamps
@access:    Private
*/ 

exports.createBootcamp = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Add bootcamp`
  })
  next()
}

/*
@desc:      Update Bootcamp by id
@route:     PUT/api/v1/bootcamps/:id
@access:    PRivate
*/ 

exports.updateBootcamp = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Edit bootcamp ${req.params.id}`
  })
  next()
}

/*
@desc:      Delete A Bootcamp by id
@route:     DELETE /api/v1/bootcamps/:id
@access:    Private
*/ 

exports.deleteBootcamp = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`
  })
  next()
}