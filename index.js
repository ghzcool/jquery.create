const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const server = http.createServer();
const app = express();

const webRoot = __dirname + '/demo'; 
app.use(express.static(webRoot));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//web server
app.get('*', function (req, res) {
	const headers = req.headers;
	if (String(headers.accept).indexOf("text/html") !== -1) {
		res.sendFile(webRoot + '/index.html');
	}
	else {
		res.status(404).send("Not found");
	}
});

const errorHandler = (err) => {
	console.error(err);
};
server.on('request', app);
server.on('error', errorHandler);
server.listen(process.env.port || 3031, () => {
	console.log('Listening on ' + server.address().port);
	console.log("");
	
});