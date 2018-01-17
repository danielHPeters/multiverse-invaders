const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('pathfinding', {title: 'Path Finding Algorithm'})
})

module.exports = router
