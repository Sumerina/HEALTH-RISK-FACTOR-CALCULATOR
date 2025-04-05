const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

// PostgreSQL connection setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bmi_database',
  password: 'your_password_here', // <- Replace with your actual DB password
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, age, dob, gender, weight, height, bmi, category } = req.body;

  pool.query(
    `INSERT INTO bmi_users (name, age, dob, gender, weight, height, bmi, category)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [name, age, dob, gender, weight, height, bmi, category],
    (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error saving data to database');
      } else {
        console.log('User data inserted successfully');
        res.status(200).send('Data saved successfully');
      }
    }
  );
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
