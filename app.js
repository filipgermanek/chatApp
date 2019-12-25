const express = require('express');
const app = express();
//set the template engine ejs
app.set('view engine', 'ejs');
//middleware
app.use(express.static('public'));


/*
 * routes
 */

app.get('/', (req, res) => {
	res.render('index')
});
const port = process.env.PORT || 8080;
server = app.listen(port);
//initialize socket.io
const io = require('socket.io')(server);
//listen on every connection
io.on('connection', (socket) => {
	console.log('new user connected');
	socket.username = 'Anonymous';
	socket.on('change_username', (data) => {
		socket.username = data.username;
	});
	socket.on('new_message', (data) => {
		io.sockets.emit('new_message', {message: data.message, username: socket.username});
	});
});
