const express = require("express");
const app = express();

const data = require("./animesdata.json");
app.get("/", (req, res) => {
    res.json(data);
});

app.get("/id/:id", (req, res) => {
    const id = req.params.id;
    res.json(data.anime[id]);
});

app.get("/name/:name", (req, res) => {
    const name = req.params.name;
    res.json(
        data.anime.filter((anime) =>
            anime.title.toLowerCase().includes(name.toLowerCase())
        )
    );
});

//Random anime
app.get("/random", (req, res) => {
    const random = Math.floor(Math.random() * data.anime.length);
    res.json(data.anime[random]);
});

app.listen(3000, () => {
    console.log("listening on localhost:3000");
});
