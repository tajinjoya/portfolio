const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 8000

app.use(express.static(__dirname + '/public'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/about.html'));
});

router.get('/resume', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/resume.html'));
});

router.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/contact.html'));
});

router.get('/portfolio', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/portfolio.html'));
});

app.use('/', router);
app.use('/img', express.static(path.join(__dirname, '/public/img')));
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/js', express.static(path.join(__dirname, '/public/js')));

app.listen(port, () => console.log(`Portfolio app listening on port ${port}!`));
app.listen(process.env.PORT)
