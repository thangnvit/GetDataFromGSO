var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
var port = 2020;

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
	var rice = JSON.parse(fs.readFileSync('./data/rice.json'));
	var rain = JSON.parse(fs.readFileSync('./data/rain.json'));
	var maize = JSON.parse(fs.readFileSync('./data/maize.json'));
	var sweetPotato = JSON.parse(fs.readFileSync('./data/sweetPotato.json'));
	res.render('home.ejs', {rice: rice, rain: rain, maize: maize, sweetPotato: sweetPotato});
})

app.listen(port, () => {
	console.log('Listeing at: ' + port);
})