const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('webgl', {title: 'WebGL Demo App'})
})

module.exports = router
