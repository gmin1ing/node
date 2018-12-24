var http = require('http');
http.createServer(function(req, res){
	// 获取用户请求的路径
	// console.log(req.url);
	// res.end();
	res.setHeader('Content-Type','text/plain; charset=utf-8');
	// 通过获取用户的请求路径判断用户请求的内容并响应
	if (req.url === '/'|| req.url === '/index') {
		res.end('hello Index');
	} else if (req.url === '/login'){
		res.end('hello login');
	} else if (req.url === '/list'){
		res.end('hello list');
	} else if (req.url === '/register'){
		res.end('hello register');
	} else{
		res.end('404, not fond.客户端错误');
	}

}).listen(8080,function(){
	console.log('http://localhost:8080');
});