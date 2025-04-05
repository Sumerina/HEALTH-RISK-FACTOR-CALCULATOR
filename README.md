## HEALTH RISK FACTOR Calculator Website

This project is a full-stack web application that calculates Body Mass Index (BMI) and stores user data using Node.js and PostgreSQL.

## Project Structure

- `index.html` - Frontend HTML form
- `styles.css` - CSS for styling the form
- `script.js` - JavaScript to handle form submission and BMI logic
- `server.js` - Express.js backend server
- `README.md` - This file

## Run Locally

### Frontend
Just open `index.html` in your browser.

### Backend
```bash
npm install express body-parser cors pg
node server.js
```

### PostgreSQL Setup
```sql
CREATE DATABASE bmi_database;
\c bmi_database;

CREATE TABLE bmi_records (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  dob DATE,
  gender VARCHAR(10),
  weight REAL,
  height REAL,
  bmi REAL,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

##  Output
The app calculates the BMI and categorizes it as Underweight, Normal, Overweight, or Obese.
