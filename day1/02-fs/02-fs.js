// // 执行文件操作
// // ------ 写入文件 ------------------
// // 1、 加载文件操作模块
// const fs = require('fs');

// // 实现文件写入
// var msg =  'hello,世界！'
// fs.writeFile('./hello.txt', msg, 'utf8', function(err){
// 	// err == null,文件写入成功，没有错误
// 	// err不是null，文件写入失败
// 	if (err) {
// 		console.log('文件写入失败，具体错误：'+err);
// 	}else{
// 		console.log('ok');
// 	}
// });
// 
// 
// ========== 读取文件 =========
var fs = require('fs');
// fs.readFile('./hello.txt', function(err,data){
// 	if (err) {
// 		console.log(err);
// 	}else {
// 		// data 参数的数据类型是一个buffer对象，里面保存的是一个一个字节（字节数组）
// 		// buffer对象转字符串，调用toSting()方法
// 		// console.log(data.toString('utf8'));===console.log(data.toString());
// 		console.log(data.toString('utf8'));
// 	}
// });


fs.readFile('./hello.txt','utf8', function(err,data){
	if (err) {
		console.log(err);
	}else {
		console.log(data);
	}
});