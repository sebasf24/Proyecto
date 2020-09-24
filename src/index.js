const bodyParser = require('body-parser');
const express = require('express');


const app =express();


app.use(bodyParser.json());
app.use(require('./Routes'));


app.listen(3000);