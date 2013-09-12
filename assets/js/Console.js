// Console.js

/**
 * The console outputs data to the screen
 */
function Console(consoleElement) {
	this.con = consoleElement;
}
Console.prototype.append = function(data) {
	// only scroll to bottom if we are currently scrolled down
	// if the user is browsing earlier content, don't force them down
	// the page when the console updates
	scrollToBottom = false
	if (this.isAtBottom()) {
		scrollToBottom = true;
	}
	this.con.html(this.con.html()+data);
	if (scrollToBottom) this.scrollToBottom();
};
Console.prototype.scrollToBottom = function() {
	this.con.scrollTop(this.con[0].scrollHeight);
};
Console.prototype.isAtBottom = function() {
	return (this.con[0].scrollHeight - this.con[0].clientHeight <= this.con.scrollTop());
}
