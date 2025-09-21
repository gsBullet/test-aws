const express = require('express');

const app = express();
const port = 3000;

app.use(express.text());

app.post('/text', (req, res) => {
    const receivedText = req.body;
    res.send(`Received text: ${receivedText}`);
});

app.get('/', (req, res) => {
    res.send('welcome to backend API');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});