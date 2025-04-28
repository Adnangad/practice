const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log(req.headers);
    res.send("Hello World");
});
app.get('/id/:user_id', (req, res) => {
    try {
        console.log(req.params.user_id);
        res.send(`${req.params.user_id}`).status(200)
    }
    catch (error) {
        console.log(error)
    }
});
app.get('/file', (req, res) => {
    res.download('./temp.txt');
})

app.listen('8000', () => console.log(`Server listening at http://localhost:8000`));