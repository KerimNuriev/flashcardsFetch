// eslint-disable-next-line import/no-extraneous-dependencies
require('@babel/register');
// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();
const config = require('./config/config');

app.locals.step = 0;

const homeRouter = require('./routes/home.routes');
const playRouter = require('./routes/play.routes');
const answerRouter = require('./routes/answer.routes');

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/answer', answerRouter);
app.use('/home', homeRouter);
app.use('/', playRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
