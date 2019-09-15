var http = require("http");
var fs = require("fs");
var url  = require("url");

const htmlData = fs.readFileSync("index.html", "utf8");
const appUrl = "https://sf-devs-developer-edition.ap15.force.com";

http.createServer(
	function(request, response) {
	  	response.writeHead(200, {"Content-Type": "text/html"});
	  	response.write(htmlData.replace("{URL}", appUrl + url.parse(request.url).pathname));
	  	response.end();
	}
).listen(process.env.PORT || 8080); 