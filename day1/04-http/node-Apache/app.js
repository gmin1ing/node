
var http = require('http');
var path = require('path');
var fs = require('fs');
var mime = require('mime');
http.createServer(function (req,res){
	// 1 获取用户请求路径 req.url
	// 2 获取public目录的完整路径
	var publicDir = path.join(__dirname, 'public');
	// 3 完整资源路径
	var filename = path.join(publicDir, req.url);
	console.log(mime.getType(filename));

	// 4 根据文件的完整路径去读取文件，
	fs.readFile(filename, function(err,data){
		if (err) {
			res.setHeader('Content-Type', 'text/plain; charset=utf-8');
			res.end("文件不存在 404");
		} else{

			// 通过第三方模块判断用户请求的资源类型
			res.setHeader('Content-Type', mime.getType(filename));
			res.end(data);
		}
	});
}).listen(8080,function(){
	console.log('http://localhost:8080');
});