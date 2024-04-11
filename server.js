const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoute');
const mongoose = require("mongoose")
const swaggerUi = require ('swagger-ui-express')
const swaggerDocument = require("./docs/swagger.json")

app.use(express.json());
app.use("/api-doc",swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/contacts', contactRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://impuhwestella7:uHcGousEReArKZGW@cluster0.3c4guup.mongodb.net/contactApp')

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
