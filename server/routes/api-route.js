const express = require('express')

const isScramble = require('./../utils/utils')

const router = express.Router()

router.post('/', async (req, res) => {
  if (req.body.str1 !== null && req.body.str2 !== null) {
    const result = isScramble(req.body.str1, req.body.str2)

    res.status(200).json({
      message: result
    })
  } else {
    res.status(500).json({ message: 'There was an error.' })
  }
})

module.exports = router
