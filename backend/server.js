

const express = require('express');
const mongoose =require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = process.env.db_string || "mongodb://localhost:27017"
const messageRoutes = require('./Routes/Routes');
const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(connectDB)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Routes
app.use('/api/messages', messageRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
