// 当前项目（包）的入口文件
// 将render放到res下
// 实现get方式添加新闻
// 实现在原来的基础上追加新闻而不是覆盖
// 1 加载http模块
var http= require('http');
var fs =require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');
// 2 创建服务
http.createServer(function(req,res){
	res.render = function(filename){// 为res对象添加一个render()函数，方便后续使用
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
	// 设计路由
	// 用户请求 / 或者 index => 新闻列表 -get请求
	// 用户请求 /item => 显示新闻详情 -get请求
	// 用户请求 /submit => 显示添加新闻页面 -get请求
	// 用户请求 /add => 将用户提交的新闻保存到data.json中 -get请求
	// 用户请求 /add => 将用户提交的新闻保存到data.json中 -get请求
	// 用户请求 /add => 将用户提交的新闻保存到data.json中 -post请求
	req.url = req.url.toLowerCase();
	req.method = req.method.toLowerCase();

	// 通过 url 模块调用url.parse()方法解析用户请求的url
	var urlObj = url.parse(req.url,true);
	// urlObj.query.title;

	if (req.url === '/' || req.url ==='/index.html' && req.method === 'get') {//index.html
		res.render(path.join(__dirname,'views','index.html'));
	} else if(req.url ==='/submit.html' && req.method === 'get'){//submit.html
		res.render(path.join(__dirname,'views','submit.html'));
	} else if(req.url ==='/newest.html' && req.method === 'get'){// newest.html
		res.render(path.join(__dirname,'views','newest.html'));
	} else if(req.url.startsWith('/add') && req.method === 'get'){
		// 获取用户提交的数据需要url模块（node.js内置模块）
		// 由于get提交数据，可以从req.url获取数据但是不方便
		// 因此使用url模块
		// console.log(req.url);
		// url.query.title;
		// url.query.url;
		// url.query.text;
		// 1. 读取data.json文件中的数据保存到list数组中
		fs.readFile(path.join(__dirname,'data','data.json'),'utf8',function(err,data){// 'utf8'设置了，回调函数函数中的data就是一个字符串
			if (err && ere.code != 'ENOENT') {// 第一次访问网站，data.json文件本身不存在，所以肯定是有错误的，但是这种错误并不是网站出错，所以不需要抛出错误
				throw err;
			}
			// 如果没有读到数据，则把[]转换为数组
			var list = JSON.parse(data || '[]');

			// 2. 把数据保存到 data.json 文件中
			list.push(urlObj.query);
			fs.writeFile(path.join(__dirname,'data', 'data.json'), JSON.stringify(list),function(err){
			if (err) {throw err;}
			console.log('ok');
			// 3. 设置响应报文头，告诉浏览器执行页面跳转
			// 301 跳转 --- 页面持久移动
			// 301 跳转 --- 页面临时移动

			// 跳转 -- 重定向
			res.statusCode = 302;
			res.statusMessage = 'Found';
			res.setHeader('Location','/');
			res.end();

			}); 
		})
		
		// 1 获取用户get的新闻数据
		// 2 把用户提交的新闻数据保存到 data.json中
		// 3 跳转到新闻列表页

	} else if(req.url ==='/add' && req.method === 'post'){
		
	} else if(req.url.startsWith('/resources') && req.method === 'get'){//submit.html
		res.render(path.join(__dirname, req.url));
	} else if(req.url ==='/y18.gif' && req.method === 'get'){//submit.html
		res.render(path.join(__dirname,'views','y18.gif'));
	}else {
		res.writeHead(404,'Not Found',{
			'Content-Type' : 'text/html; charset=utf-8'
		});
		res.end('404, Page Not Found.');
	}
}).listen(8080,function(){
	console.log('服务器功能启用，请访问：http://localhost:8080');
});


