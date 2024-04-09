const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

const MONGO_URI = process.env.MONGO_URI ||'mongodb://mongo:27017/appdb'
const PORT =  process.env.PORT ||8080
mongoose
    .connect(MONGO_URI, {})
    .then(() => {
        app.listen(PORT, () => console.log('Server listen on port', PORT));
    })
    .catch((e) => console.error(e.message));