'use strict';

const Hapi = require('hapi');
const db = require('./database').db;
const userModel = require('./src/models/users');
const routes = require('./src/routes/users');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8080 
});
server.route(routes);
// Add the route
server.route({
    method: 'GET',
    path:'/user', 
    handler: function (request, reply) {

        return reply('hello world');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});