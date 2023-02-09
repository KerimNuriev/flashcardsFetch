require('@babel/register');
const express = require('express');

const app = express();
const config = require('./config/config');

const homeRouter = require('./routes/home.routes');
const playRouter = require('./routes/play.routes');

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/home', homeRouter);
app.use('/', playRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
