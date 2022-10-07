const data = require('../data/data');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(data)
});

router.get('/:id', (req, res, next) => {
    const foundTeam = data.filter(team => team.id == req.params.id);
    
    if (foundTeam < 1) {
        next({ status: 404, message: 'not found' });
    } else {
        res.status(200).json(foundTeam[0])
    }
});

router.post('/', (req, res, next) => {
    if (req.body.team && req.body.place) {
        const newTeam = { team: req.body.team, place: req.body.place };
        data.push(newTeam);
        res.status(200).redirect('/');
    } else {
        next({ status: 400, message: 'problem creating team' })
    }
});

module.exports = router;