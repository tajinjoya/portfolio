const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 8000

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
});

router.get('/resume', function (req, res) {
  res.sendFile(path.join(__dirname + '/resume.html'));
});

router.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname + '/contact.html'));
});

router.get('/portfolio', function (req, res) {
  res.sendFile(path.join(__dirname + '/portfolio.html'));
});

app.use('/', router);
app.use('/img', express.static(path.join(__dirname, '/img')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/js', express.static(path.join(__dirname, '/js')));

app.listen(port, () => console.log(`Portfolio app listening on port ${port}!`)).listen(process.env.PORT)
