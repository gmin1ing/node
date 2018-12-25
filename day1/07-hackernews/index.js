// 当前项目（包）的入口文件
// 1 加载http模块
var http= require('http');
var fs =require('fs');
var path = require('path');
// 2 创建服务
http.createServer(function(req,res){//
	// 设计路由
	// 用户请求 / 或者 index => 新闻列表 -get请求
	// 用户请求 /item => 显示新闻详情 -get请求
	// 用户请求 /submit => 显示添加新闻页面 -get请求
	// 用户请求 /add => 将用户提交的新闻保存到data.json中 -get请求
	// 用户请求 /add => 将用户提交的新闻保存到data.json中 -get请求
	// 用户请求 /add => 将用户提交的新闻保存到data.json中 -post请求
	req.url = req.url.toLowerCase();
	req.method = req.method.toLowerCase();
	// 根据用户请求的路径显示对应的html
	if (req.url === '/' || req.url ==='/index' && req.method === 'get') {//index.html
		fs.readFile(path.join(__dirname,'views','index.html'),function(err,data){
			if(err){
				throw err;
			}
			res.end(data);
		});
	} else if(req.url ==='/submit' && req.method === 'get'){//submit.html
		fs.readFile(path.join(__dirname,'views','submit.html'),function(err,data){
			if(err){
				throw err;
			}
			res.end(data);
		});
	} else if(req.url ==='/item' && req.method === 'get'){// detail.html
		fs.readFile(path.join(__dirname,'views','detail.html'),function(err,data){
			if(err){
				throw err;
			}
			res.end(data);
		});
	} else if(req.url ==='/add' && req.method === 'get'){

	} else if(req.url ==='/add' && req.method === 'post'){

	} else {
		res.writeHead(404,'Not Found',{
			'Content-Type' : 'text/html; charset=utf-8'
		});
		res.end('404, Page Not Found.');
	}
}).listen(8080,function(){
	console.log('服务器功能启用，请访问：http://localhost:8080');
});