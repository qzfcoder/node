// 写入文件

let fs = require("fs");
let path = require("path");
/*
  1 创建一个文件流(可读可写),  
    fs.createWriteStream(path[, options])
  2 
*/

// 创建一个可写流
let ws = fs.createWriteStream(path.join(__dirname, "/demo.txt"));

// 检查流的状态
ws.on("open", function () {
  console.log("可写流打开了");
});
ws.on("close", function () {
  console.log("可写流关闭了");
});

// 使用可写流写入数据
ws.write("123\n");
ws.write("456");
ws.write("789");
ws.close();
