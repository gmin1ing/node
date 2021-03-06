var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function(req,res){
	if (req.url === '/'|| req.url === '/index') {
		// 读取文件
		fs.readFile(path.join(__dirname, 'html', 'index.html'), function(err, data){
			if (err){
				throw err;
			} else {
				// 把读取后的内容直接返回给客户端
				res.end(data);
			}
		});
	} else if (req.url === '/login'){
		// 读取文件
		fs.readFile(path.join(__dirname, 'html', 'login.html'), function(err, data){
			if (err){
				throw err;
			} else {
				// 把读取后的内容直接返回给客户端
				res.end(data);
			}
		});
	} else if (req.url === '/list'){
		// 读取文件
		fs.readFile(path.join(__dirname, 'html', 'list.html'), function(err, data){
			if (err){
				throw err;
			} else {
				// 把读取后的内容直接返回给客户端
				res.end(data);
			}
		});
	} else if (req.url === '/register'){
		// 读取文件
		fs.readFile(path.join(__dirname, 'html', 'register.html'), function(err, data){
			if (err){
				throw err;
			} else {
				// 把读取后的内容直接返回给客户端
				res.end(data);
			}
		});
	}  else if (req.url === '/img/02.jpg'){// 图片文件读取
		// 读取文件
		fs.readFile(path.join(__dirname, 'img', '02.jpg'), function(err, data){
			if (err){
				throw err;
			} 
				res.setHeader('Content-Type','image/jpeg');
				// 把读取后的内容直接返回给客户端
				res.end(data);
			
		});
	} else if (req.url === '/css/index.css'){// 图片文件读取
		// 读取文件
		fs.readFile(path.join(__dirname, 'css', 'index.css'), function(err, data){
			if (err){
				throw err;
			} 
				res.setHeader('Content-Type','text/css');
				// 把读取后的内容直接返回给客户端
				res.end(data);
			
		});
	}else{
		// 读取文件
		fs.readFile(path.join(__dirname, 'html', '404.html'), function(err, data){
			if (err){
				throw err;
			} else {
				// 把读取后的内容直接返回给客户端
				res.end(data);
			}
		});
	}

}).listen(9090,function(){
	console.log('http://localhost:9090');
});