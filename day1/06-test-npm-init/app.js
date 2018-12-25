var http = require('http');
http.createServer(function(req,res){
	// request.headers
	// request.rawHeaders
	// request.httpVersion
	// request.method
	// request.url

	// 1 获取所有请求报文头 -- req.headers ---- 返回一个对象，对象中包含所有请求报文头（键值对的形式）
	// console.log(req.headers);
	// { host: 'localhost:9090',
	  // connection: 'keep-alive',
	  // 'cache-control': 'max-age=0',
	  // 'upgrade-insecure-requests': '1',
	  // 'user-agent':
	  //  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.80 Safari/537.36',
	  // accept:
	  //  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
	  // 'accept-encoding': 'gzip, deflate, br',
	  // 'accept-language': 'zh-CN,zh;q=0.9',
	  // cookie: 'W ebstorm-ef7d8a5c=da9d8664-3734-43d5-b1b7-950047f37d90' }
	 
	// 2  获取所有请求报文头 -- request.rawHeaders --- 返回一个数组，数组中保存的是 所有请求报文头的 字符串
	// console.log(req.rawHeaders);
	
	// 3 request.httpVersion -- 客户端使用的http版本
	// console.log(req.httpVersion);
	
	// 4 request.method -- 客户端请求的方式（post，get。。。）
	// console.log(req.method);
	// 5 url --- 获取请求的路径--- 不包含主机名，端口号和协议
	// console.log(req.url);
	res.end('over');

}).listen(9090,function(){
	console.log('http://localhost:9090');
});