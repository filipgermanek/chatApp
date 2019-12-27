$(function() {
	//make connection
	let connectionUrl = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'https://filip-chat.herokuapp.com/';
	let socket = io.connect(connectionUrl);

	//buttons and inputs
	let message = $("#message");
	let username = $("#username");
	let send_message = $("#send_message");
	let send_username = $("#send_username");
	let chatroom = $("#chatroom");

	//Emit message
	send_message.click(function(){
		socket.emit('new_message', {message: message.val()})
	})
	//Listen on new message
	socket.on('new_message', (data) => {
		chatroom.append('<div class="message-bubble">' + data.username + ': ' + data.message + '</div>')
	})
	//Emit a username
	send_username.click(function(){
		socket.emit('change_username', {username: username.val()});
	});
})