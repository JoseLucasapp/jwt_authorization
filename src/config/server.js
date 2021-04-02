require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

require('./db/dbConnect');
require('./routes')(app)

app.listen(3000);