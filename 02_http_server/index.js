const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.once('request', (req, res) => {
	if (req.url === '/friends') {
		/* res.writeHead(200, {
			'Content-Type': 'text/plain',
		}); */
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(
			JSON.stringify({
				id: 1,
				name: 'Sir Isaac Newton',
			})
		);
	} else if (req.url === '/messages') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<body>');
		res.write('<ul>');
		res.write('<li>Hello Isaac</li>');
		res.write('<li>What are your thoughts on astronomy?</li>');
		res.write('</ul>');
		res.write('</body>');
		res.write('</html>');
		res.end();
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(3000, () => {
	console.log(`Listening on port ${PORT}..`);
});
