const express = require('express');

const teams_controller = require('./controllers/team_controller');

//invoke express
const app = express();
const PORT = 9001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/teams', teams_controller);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});

module.exports = app