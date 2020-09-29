const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app =express();

app.use(cors());
app.use(bodyParser.json());
app.use(require('./Routes'));



app.listen(1337);