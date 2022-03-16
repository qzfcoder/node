// buffer是一个数组类似的对象，他是用来保存二进制数据的
// 大小固定,创建了便不能修改了
// 效率很高,存储读取都很快
// 每个元素占用内存1字节
// buffer是node中非常核心的模块,无需下载,无需引入

// let buf = new Buffer(10); // 性能特别差

// console.log(buf);

// 创建一个buffer的实例对象
let buf2 = Buffer.alloc(10); // 性能比new Buffer稍好
console.log(buf2);

let buf3 = Buffer.allocUnsafe(10); // 性能比
console.log(buf3);

// let buf4 = Buffer.form(10);
// console.log(buf4);
