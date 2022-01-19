const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.routes');
const { append } = require('express/lib/response');
require('dotenv').config({path:"./config/.env"});
require('./config/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use('/api/user', userRoute);

// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})