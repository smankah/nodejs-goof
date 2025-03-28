const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// POST request to insert data into the database
app.post('/add-data', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).send('Name and age are required.');
    }

    const query = 'INSERT INTO users (name, age) VALUES (?, ?)';
    db.query(query, [name, age], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error inserting data.');
        }
        res.status(201).send('Data added successfully.');
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});











