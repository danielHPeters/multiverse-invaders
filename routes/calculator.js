const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('calculator', {title: 'Calculator'})
})

module.exports = router
