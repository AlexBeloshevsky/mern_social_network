const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API running');
});
