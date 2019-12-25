$(function() {
	//make connection
	//TODO fix url here
	//var connectionURL = https://filip-chat.herokuapp.com/
	let socket = io.connect('https://filip-chat.herokuapp.com/');

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
		chatroom.append('<p class="message">' + data.username + ': ' + data.message + '</p>')
	})
	//Emit a username
	send_username.click(function(){
		socket.emit('change_username', {username: username.val()});
	});
})