const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Define Routes
app.use('/api/dailyGoals', require('./routes/dailyGoals'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
