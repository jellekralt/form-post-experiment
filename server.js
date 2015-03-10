var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

var logRequest = function(req, res) {

	setTimeout(function() {

		console.log('Received!');
		res.send("OK");

	}, 5000);

};
 
/* Serve control page */
app.get("/", function(req, res) {
    res.sendfile('static/index.htm');
});
 
/* Post test */
app.post("/test-request", logRequest);

/* Get test */
app.get("/test-request", logRequest);

app.listen(port, function() {
   console.log("Listening on " + port);
});