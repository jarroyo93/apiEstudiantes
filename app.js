const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes/EstRouters");

const app = express();
app.use(bodyParser.json());

app.use('/apiEstudiantes', routes);

module.exports = app;