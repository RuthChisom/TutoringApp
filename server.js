require('dotenv').config(); //allows us to use the environment variables in .env
const {PORT} = process.env;

//create an express server
const express = require('express');

//connect to MongoDB
const connectDB = require('./db');

connectDB();

// initialize express
const app = express();

// initialize express middleware
app.use(express.json({extended: false}));

//create simple get request - inject routes
app.get('/', (req, res) => res.json({message: "Welcome to Tutoring App!"}))

//listen to app connection
const port = process.env.PORT || PORT;
app.listen(port, () => console.log(`app running on port ${port}`))