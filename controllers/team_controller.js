const data = require('../data/data');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(data)
})
module.exports = router;