const express = require('express');

const teams_controller = require('./controllers/team_controller');

//invoke express
const app = express();
const PORT = 9001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/teams', teams_controller);

app.use((req, res) => {
    res.status(404)
        .json({
            error: 'route not found'
        })
});

app.use((err, req, res, next) => {
    let errorStatus = err.status || 500;
    let errorMessage = err.message || 'problem with your request';
    res.json({
        status: errorStatus,
        message: errorMessage
    });
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});

module.exports = app