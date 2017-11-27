const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('map', {title: 'Map test'})
})

module.exports = router
