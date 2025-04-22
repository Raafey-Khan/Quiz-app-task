const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

router.post('/', async (req, res) => {
  const { name, score, total } = req.body;

  try {
    const result = new Result({ name, score, total });
    await result.save();
    res.status(201).json({ message: 'Result saved!', result });
  } catch (err) {
    res.status(500).json({ message: 'Error saving result', error: err });
  }
});

module.exports = router;
