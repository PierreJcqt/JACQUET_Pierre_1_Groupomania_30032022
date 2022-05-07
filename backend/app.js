const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const auth = require('./middleware/auth');
const { Sequelize } = require('./models/index');
const cors = require('cors');

app.use(express.json());
app.use(cors({origin: "http://localhost:8080"}));

const userRoutes = require('./routes/user');
const postsRoutes = require('./routes/posts');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes);
app.use('/api/posts', postsRoutes);


module.exports = app;
