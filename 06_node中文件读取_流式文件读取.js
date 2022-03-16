// 创建一个可读流

// fs.createReadStream(path[, options])

const path = require("path");
let fs = require("fs");

let rs = fs.createReadStream(path.join(__dirname, "demo.txt"));
let ws = fs.createWriteStream(path.join(__dirname, "tt.txt"));
// 检查流的状态
rs.on("open", function () {
  console.log("可读流打开了");
});
rs.on("close", function () {
  ws.close();
  console.log("可读流关闭了");
});
// 检查流的状态
ws.on("open", function () {
  console.log("可写流打开了");
});
ws.on("close", function () {
  console.log("可写流关闭了");
});
// 给可读流绑定一个data事件,就会触发可读流自动读取

rs.on("data", function (data) {
  console.log(data);
  ws.write(data);
});
