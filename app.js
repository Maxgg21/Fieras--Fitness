const express = require('express');
const path = require("path")
const app = express();

const PORT = 8080;

app.use(express.static('public'));

//ruta de home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/index.html'));
});

app.get('/detailPlan', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/detailPlan.html'));
});



app.listen(PORT, () => console.log(`Express listening PORT: ${PORT}`))
