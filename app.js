const express = require('express')
const app = express()
const port = 3001
const Faceit = require("faceit-js");
const api = new Faceit("bbc7cdfd-c18b-4e9e-bd98-3ca5e4c2bac6");

app.get('/getElo/:name', async (req, res) => {
    const name = req.params.name;
    let text = await api.nickname(name);
    res.send(JSON.stringify(text["games"]["csgo"]["faceit_elo"]));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})