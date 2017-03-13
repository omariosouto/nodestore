const http = require('http');

const server = http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'application/json'});


	switch(request.url) {
		case '/contato':
			var contatoObj = {
				'message': 'Pagina de contato',
				'name': 'Mario Souto',
				'email': 'soutomarios@gmail.com'
			};

			response.end(conteudo);
			break;
		case '/juninho':
			response.end('junin play');
			break;
		default:
			response.end(request.url);
			break;
	}

	response.end(request.url);
});

const URL = '127.0.0.1';
const PORT = '1337';

server.listen(PORT, URL);
console.log(`Server running at http://${URL}:${PORT}`);
