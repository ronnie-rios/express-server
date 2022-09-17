const data = require('../data/data');
const express = require('express');
const e = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(data)
});

router.get('/:id', (req, res) => {
    const foundTeam = data.filter(team => team.id == req.params.id);
    console.log(foundTeam[0])
    if (foundTeam < 1) {
        res.json({ error: 'team not found'});
    } else {
        res.json(foundTeam[0])
    }
});

router.post('/', (req, res) => {
    if (req.body.team && req.body.place) {
        const newTeam = { team: req.body.team, place: req.body.place };
        data.push(newTeam);
        res.redirect('/');
    } else {
        res.json({ error: 'problem creating your team' });
    }
});

module.exports = router;