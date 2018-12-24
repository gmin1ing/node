
var fs = require('fs');
var path = require('path');
var filename = path.join(__dirname,'day2');
fs.mkdir(filename, function(err){
	if (err) {
		throw err;
	}
});

v