// Create web server
import express from 'express';
import bodyParser from 'body-parser';
import memberRouter from './routes/member.js';

// Create express app
const app = express();

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
import dbConfig from './config/database.js';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

// Use member routes
app.use('/members', memberRouter);

// Listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
