const express = require('express');

const app = express();

app.use(express.json());

app.post('/example', (req, res) => {
    const data = req.body;
    // Process the data here
    console.log(data);
    res.status(201).send({ message: 'Data received successfully', data });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






