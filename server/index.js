require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3035;
const ctrl = require('./controller.js');

app.use(express.json());
app.use(cors());

app.get('/api/info', ctrl.getInfo);
app.post('/api/info', ctrl.postInfo);

app.listen(port, () => console.log('Engage', port));