const express = require('express');
const mongoose = require('mongoose');
const todorouter= require("./Routes/todoRouts");
const app = express();


const url = "mongodb+srv://harispatel62:4asklccb@hspdev.exn6hxy.mongodb.net"; // Replace with your MongoDB connection URL
mongoose.connect(url);
// , { useNewUrlParser: true }
const con = mongoose.connection;

app.use(express.json());

// Connection From Code Commented because already connected from Mongo DB 
// try {
//     con.on('open', () => {
//         console.log('Connected to the database');
//     })
// } catch (error) {
//     console.log("Error: " + error);
// }

const port = 9000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});


app.use('/todos',todorouter)