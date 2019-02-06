'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
	host: 'localhost',
  port : 3000
});

// Start the server
const start =  async () => {
	try {

		await server.register(require('./api'));

		await server.start();
	}
	catch (err) {
		console.log(err);
		process.exit(1);
	}

	console.log(`server is running on ${server.info.uri}`);
}

start();
