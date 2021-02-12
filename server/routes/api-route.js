const express = require('express')

const isScramble = require('./../utils/utils')

const router = express.Router()

router.post('/', async (req, res) => {
  if (req.body.str1 !== null && req.body.str2 !== null) {
    const result = isScramble(req.body.str1, req.body.str2)

    res.status(200).json({
      matches: !result,
      message: result ? 'Portion of "str1" characters can be rearranged to match "str2".' : 'Sorry, portion of "str1" characters can\'t be rearranged to match "str2".'
    })
  } else {
    res.status(500).json({ message: 'Please specify string 1 and string 2.' })
  }
})

module.exports = router
