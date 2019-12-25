$(function() {
	//make connection
	let socket = io.connect('http://localhost:3000');

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
		console.log("data", data);
		chatroom.append('<p class="message">' + data.username + ': ' + data.message + '</p>')
	})
	//Emit a username
	send_username.click(function(){
		console.log('click',username.val())
		socket.emit('change_username', {username: username.val()});
	});
})