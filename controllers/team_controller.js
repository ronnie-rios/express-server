const data = require('../data/data');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(data)
});

router.get('/:id', (req, res) => {
    const foundTeam = data.filter(team => team.id == req.params.id);
    console.log(foundTeam[0])
    if (foundTeam < 1) {
        res.status(404).json({ error: 'team not found'});
    } else {
        res.status(200).json(foundTeam[0])
    }
});

router.post('/', (req, res) => {
    if (req.body.team && req.body.place) {
        const newTeam = { team: req.body.team, place: req.body.place };
        data.push(newTeam);
        res.status(200).redirect('/');
    } else {
        res.status(400).json({ error: 'problem creating your team' });
    }
});

module.exports = router;