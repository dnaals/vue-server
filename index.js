const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '.env' })
const test = require('./router/test.js');
const push = require('./router/push.js');
const app = express();
const vue = require('./router/vuetest.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', test);
app.use('/push', push);
app.use('/vue',vue);


app.listen(3030)

