const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('matrix', {title: 'Matrix'})
})

module.exports = router
