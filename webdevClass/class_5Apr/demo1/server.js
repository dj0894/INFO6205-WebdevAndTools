const express = require('express');
const app = express();
const PORT = 3001

app.use(express.static())

app.get('/api/test', (req, res) => {
    res.send('server works');
});

app.listen(PORT, () => {
    console.log(`https://localhost:${PORT}/`);
});