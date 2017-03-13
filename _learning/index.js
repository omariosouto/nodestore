const express = require('express');
const app = express();
const path    = require("path");

const methodOverride = require('method-override');

app.get('', (req, res) => {
	res.send('Hello World');
});

app.get('/contato', (req, res) => {
	const contatoObj = {
		'message': 'Página de contato',
		'name': 'Mario Souto',
		'email': 'soutomarios@gmail.com'
	};
	res.json(contatoObj);
});


app.get('/contatohtml', (req, res) => {
	res.sendFile(path.join(`${__dirname}/view/contato.html`));
});


// Middlewere para não servir o favicon.ico
app.use((request, response, next) => {
	if(request.url === '/favicon.ico') {
		response.writeHead(200, {'Content-Type': 'image/x-icon'});
		response.end('');
	} else {
		next();
	}
});

// Middlewere para habilitar CORS
app.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// Middlwere 404 Redirect
app.use(function (req, res, next) {
	var err = res.send('404: Não encontrado');
	err.status = 404;
	next(err);
});

const server = app.listen(3000, () => {
	const host = server.address().address;
	const port = server.address().port;

	console.log(`Example app listening at http://${host}:${port}`);
});