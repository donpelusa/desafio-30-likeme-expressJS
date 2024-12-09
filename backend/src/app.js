const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const APIRoutes = require('./routes/routes');
const app = express();

app.use(morgan('dev'));
app.use(cors(
    {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
))

app.use(express.json());
app.use('/', APIRoutes)

module.exports = app;