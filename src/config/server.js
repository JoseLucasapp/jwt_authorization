const express = require('express');

const app = express();

require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

require('./db/dbConnect');
require('./routes')(app)

app.listen(3000);