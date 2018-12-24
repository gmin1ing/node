// 1 http 模块加载
var http = require('http');
// 2 创建一个http服务对象
var server = http.createServer();
// 3 监听用户请求事件（request事件）
// request 用户请求报文中的所有内容，通过request可以获取用户提交过来的数据
// response 用来向用户响应一些数据，当服务器向客户端响应数据时必须使用response对象

server.on('request',function(req,res){// 不区分请求，都返回hello
	// 设置响应报文头部告诉浏览器用何种方式解析
	// text/plain --- 纯文本
	res.setHeader('Content-Type','text/html; charset=utf-8');
	res.write('hello，<h1>世界</h1>');
	// 对于每个请求，服务器必须结束响应。否则客户端会一直等待
	res.end();
});

// 4 启用服务
server.listen(8080,function(){
	console.log('服务器已经启用，请访问：http://localhost:8080');
});