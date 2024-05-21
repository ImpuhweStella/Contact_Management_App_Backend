const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoute');
const mongoose = require("mongoose")
const swaggerUi = require ('swagger-ui-express')
const swaggerDocument = require("./docs/swagger.json")
const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use("/api-doc",swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/contactMgtSystem')

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
