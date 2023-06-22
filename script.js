const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())

const api = require('./getInfo');

app.get('/api/v1/:username/totalSolved', async (req, res) => {
    const { username } = req.params;
    const data = await api.totalSolved(username);
    res.json(data);
})

app.get('/api/v1/:username/rank', async (req, res) => {
    const { username } = req.params;
    const data = await api.rank(username);
    res.json(data);
})

app.get('/api/v1/:username/name', async (req, res) => {
    const { username } = req.params;
    const data = await api.name(username);
    res.json(data);
})

app.get('/api/v1/:username/totalActiveDays', async (req, res) => {
    const { username } = req.params;
    const data = await api.totalActiveDays(username);
    res.json(data);
})
app.get('/api/v1/:username/maxStreak', async (req, res) => {
    const { username } = req.params;
    const data = await api.maxStreak(username);
    res.json(data);
})
app.get('/api/v1/:username/hardQuestion', async (req, res) => {
    const { username } = req.params;
    const data = await api.hardQuestion(username);
    res.json(data);
})
app.get('/api/v1/:username/easyQuestion', async (req, res) => {
    const { username } = req.params;
    const data = await api.easyQuestion(username);
    res.json(data);
})
app.get('/api/v1/:username/mediumQuestion', async (req, res) => {
    const { username } = req.params;
    const data = await api.mediumQuestion(username);
    res.json(data);
})

app.listen(3000, () => {
    console.log("listening to port 3000");
})


