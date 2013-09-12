// Console.js

/**
 * The console outputs data to the screen
 */
function Console(consoleElement) {
	this.con = consoleElement;
}
Console.prototype.append = function(data) {
	this.con.html(this.con.html()+data);
	this.scrollToBottom();
};
Console.prototype.scrollToBottom = function() {
	this.con.scrollTop(this.con[0].scrollHeight);
};
