const express = require('express');
const connectDB = require('./config/db');
const todorouter= require("./Routes/todoRouts");
const authrouter= require("./Routes/auth");
const app = express();

// Connect Database
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', authrouter);
app.use('/api/todos', todorouter);

const port = 9000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
