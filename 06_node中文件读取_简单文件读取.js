// fsreadFile(path[,options],callback);

const path = require("path");
let fs = require("fs");

fs.readFile(path.join(__dirname, "demo.txt"), function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data); // 读取出来的是buffer数据
    console.log(data.toString()); // tostring是给txt文本那种的，用户存储的不一定是纯文本，例如音频视频等则不行
    fs.writeFile(path.join(__dirname, "123.txt"), data, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("文件写入成功");
      }
    });
  }
});
