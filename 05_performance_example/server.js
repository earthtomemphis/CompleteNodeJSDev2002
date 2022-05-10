const express = require('express');
/* const cluster = require('cluster');
const os = require('os'); */

const app = express();

function delay(duration) {
	const startTime = Date.now();
	while (Date.now() - startTime < duration) {
		//event loop is blocked...
	}
}

app.get('/', (req, res) => {
	// JSON.stringify({}) => "{}"
	// JSON.parse("{}") => {}
	// [5,1,2,3,4].sort()
	res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
	//delay the response
	delay(4000);
	res.send(`Ding ding ding! ${process.pid}`);
});

console.log('Running server.js...');
console.log('Worker process started.');
app.listen(3000);

/* if (cluster.isMaster) {
	console.log('Master has been started...');
	const NUM_WORKERS = os.cpus().length;
	for (let i = 0; i < NUM_WORKERS; i++) {
		cluster.fork();
	}
} else {
	console.log('Worker process started.');
	app.listen(3000);
} */
