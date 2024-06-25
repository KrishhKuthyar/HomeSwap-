const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const methodOverride = require('method-override');
const path = require('path');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.get('/', (req, res) => res.send('API Running'));


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
