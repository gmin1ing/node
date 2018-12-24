// var fs = require('fs');

// // ./相对路径是相对于执行node命令的路径
// fs.readFile('./hello.txt', 'utf8', function(err, data){
// 	if (err) {
// 		console.log(err);
// 	}else {
// 		console.log(data);
// 	}
// });


// 解决在文件读取中./相对路径的问题
// 解决：__dirname ,__filename
// __dirname : 表示正在执行的js 文件所在的目录
// __filename：表示正在执行的js 文件的完整路径
// console.log(__dirname);
// console.log(__filename);


// var fs = require('fs');
// var filename = __dirname +'\/'+'hello.txt';
// fs.readFile(filename, 'utf8', function(err, data){
// 	if (err) {
// 		console.log(err);
// 	}else {
// 		console.log(data);
// 	}
// });


var fs = require('fs');
var path = require('path'); 
var filename = path.join(__dirname,'hello.txt');
fs.readFile(filename, 'utf8', function(err, data){
	if (err) {
		console.log(err);
	}else {
		console.log(data);
	}
});