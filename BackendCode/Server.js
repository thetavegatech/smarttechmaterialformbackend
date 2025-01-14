const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
//mongodb+srv://tejaswinibakliwal:h2IOm4XugnMrT4bb@fabrication.fxzj6.mongodb.net/?retryWrites=true&w=majority&appName=Fabrication
mongoose.connect('mongodb+srv://tejaswinibakliwal:h2IOm4XugnMrT4bb@fabrication.fxzj6.mongodb.net/newdb?retryWrites=true&w=majority&appName=Fabrication/newDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('DB Connection Error:', err));

// Routes
const materialsRoute = require('./routes/materials');
app.use('/api/materials', materialsRoute);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
