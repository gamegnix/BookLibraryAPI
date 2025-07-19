const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const bookRoutes = require('./src/routes/bookRoutes');
const authRoutes = require('./src/routes/authRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working');
});

app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection failed:', err));

module.exports = app;
