var http = require('http');
var https = require('https');
var fs = require("fs");

const url = 'https://sf-devs-developer-edition.ap15.force.com/';
 
http.createServer(
	function(request, response) {
		https.get(url, function(res) {
			let html = '';
			res.on('data', (d) => {
				html += html + d;
			});
			res.on('end', () => {
				response.writeHead(200, {'Content-Type': 'text/html'});
			  	response.write(html);
			  	response.end();
			})
		});
	}
).listen(process.env.PORT || 8080);