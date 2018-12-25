// 当前项目（包）的入口文件
// 1 加载http模块
var http= require('http');
var fs =require('fs');
var path = require('path');
var mime = require('mime');
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
	if (req.url === '/' || req.url ==='/index.html' && req.method === 'get') {//index.html
		render(path.join(__dirname,'views','index.html'), res);
	} else if(req.url ==='/submit.html' && req.method === 'get'){//submit.html
		render(path.join(__dirname,'views','submit.html'), res);
	} else if(req.url ==='/newest.html' && req.method === 'get'){// newest.html
		render(path.join(__dirname,'views','newest.html'), res);
	} else if(req.url ==='/add' && req.method === 'get'){

	} else if(req.url ==='/add' && req.method === 'post'){
		
	} else if(req.url ==='/resources' && req.method === 'get'){//submit.html
		render(path.join(__dirname, req.url), res);
	} else if(req.url ==='/y18.gif' && req.method === 'get'){//submit.html
		render(path.join(__dirname,'views','y18.gif'), res);
	}else {
		res.writeHead(404,'Not Found',{
			'Content-Type' : 'text/html; charset=utf-8'
		});
		res.end('404, Page Not Found.');
	}
}).listen(8080,function(){
	console.log('服务器功能启用，请访问：http://localhost:8080');
});


function render(filename, res){
	fs.readFile(filename,function(err,data){
		if(err){
			res.writeHead(404,'Not Found',{'Content-Type' : 'text/html; charset=utf-8'});
			res.end('404, Page Not Found.');
			return;
		}
		res.setHeader('Content-Type', mime.getType(filename));
		res.end(data);
		});
}