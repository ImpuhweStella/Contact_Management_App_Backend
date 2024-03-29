const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoute');
const mongoose = require("mongoose")

app.use(express.json());
app.use('/contacts', contactRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/contactApp");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
