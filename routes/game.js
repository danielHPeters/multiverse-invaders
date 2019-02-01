const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => res.render('game', { title: 'Invaders Game' }))

module.exports = router
