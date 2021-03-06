'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
	host: 'localhost',
  port : 3000,
	routes: {
		cors: {
			origin : ['*'],
			headers: ['Origin', 'X-Requested-With', 'Content-Type', 'token'],
			additionalHeaders: ['access-control-allow-headers', 'token', 'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, CORRELATION_ID'],
  		additionalExposedHeaders: ['access-control-allow-headers', 'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, CORRELATION_ID']
		}
	}
});



// Start the server
const start =  async () => {
	try {

		await server.register(require('./api'));
		await server.register(require('hapi-auth-cookie'))

		server.auth.strategy('restricted', 'cookie',{
    password : '$2a$10$JwbwopKOwGepKZ/bRbFjB.1Av0HMxxbmGYDeofT55db1WdPEmIf82',
    cookie : 'session',
    isSecure : false,

	// biar ga redirect ke route yg pake try mode di strategy
	// redirectOnTry : false (error)
	});
		await server.start();
	}
	catch (err) {
		console.log(err);
		process.exit(1);
	}

	console.log(`server is running on ${server.info.uri}`);
}

start();
