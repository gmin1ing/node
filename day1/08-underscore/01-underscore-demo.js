var _ = require('underscore');
// demo1
// var names = ['dkjl','lkdjfk','dkfh'];
// var  ages = [18,18,19];
// var genders = ['男','男', '女'];

// var result = _.zip(names, ages, genders);
// console.log(result);
// console.log('==================');

// result = _.unzip(result);
// console.log(result);



// demo2
// 声明一段模版 HTML 代码
var html = '<h2><%= name %></h2>';
var fn =_.template(html);
// 调用template()返回的这个函数fn
// fn 接收一个数据并替换template中的数据
html = fn({name:'dada'});
console.log(html);