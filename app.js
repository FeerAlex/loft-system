const express = require('express');
const path    = require('path');
const app     = express();
const index   = require('./api/routes/index');
// const flash = require('connect-flash');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const session = require('express-session');

app.set('views', path.join(__dirname, './dist'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static(path.join(__dirname, './dist')));

app.use('/', index);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {message: err.message, error: err});
});


const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Сервер запущен на порте: ' + server.address().port);
});