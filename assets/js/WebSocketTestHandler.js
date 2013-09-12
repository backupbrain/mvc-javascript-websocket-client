// assets/js/WebSocketTestHandler.js

/**
 *  This event handler responds to the WebSocketClient, customizing the actions we take 
 *  when it issues events such as onOpen or onMessage.
 *
 *  We implement this separately so that we can perform layout-specific changes while
 *  keeping the WebSocketClient abstracted from UI
 */
function WebSocketTestHandler(console) {
	this.con = console;
}

/**
 *  when the user tries to send a message,
 *  publish your message into the console
 */
WebSocketTestHandler.prototype.send = function(message) {
	this.con.append('<div class="msg"><i class="icon-laptop">You said:</i><pre>'+this.con.encodeHTML(message)+"</pre></div>");
}

/**
 * upon connection, 
 *   - exchange the Connect button for a Disconnect button, 
 *   - allow user to send messages to the server,
 *   - notify user of the connection
 */
WebSocketTestHandler.prototype.onOpen = function() {
	$("#connected").html('<i class="icon-check"></i>');
	$("#connect").hide();
	$("#disconnect").show();
	$("#send").removeClass("disabled");
 };
/**
 *  when a message is recieved from the server,
 *  publish the server's message into the console
 */
WebSocketTestHandler.prototype.onMessage = function(e) {
	var message = e.data;
	this.con.append('<div class="msg"><i class="icon-white icon-cloud">Server said:</i><pre>'+this.con.encodeHTML(message)+"</pre></div>");
};

/**
 * upon connection, 
 *   - exchange the Connect button for a Disconnect button, 
 *   - allow user to send messages to the server,
 *   - notify user of the connection
 */
WebSocketTestHandler.prototype.onClose = function() {
	$("#connected").html('<i class="icon-check-empty">');
	$("#disconnect").hide();
	$("#connect").show();
	$("#send").addClass("disabled");
};

/**
 * if there was an error,
 * print the error into the console
 */
WebSocketTestHandler.prototype.onError = function() {
	var message = e.data;
	this.con.append('<div class="msg"><i class="icon-white icon-warning-sign">Error:</i><pre>'+message+"</pre></div>");
};
