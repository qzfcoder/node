// 写入文件

/*
 file <string> | <Buffer> | <URL> | <integer> filename or file descriptor
  data <string> | <Buffer> | <TypedArray> | <DataView> | <Object>
  options <Object> | <string>
    encoding <string> | <null> Default: 'utf8'
    mode <integer> Default: 0o666
    flag <string> See support of file system flags. Default: 'w'.
    signal <AbortSignal> allows aborting an in-progress writeFile
  callback <Function>
err <Error> | <AggregateError>
*/

let fs = require("fs");
let path = require("path");
fs.writeFile(path.join(__dirname, "demo1.txt"), "今天天气号啊", (err) => {
  if (err) {
    console.log("文件写入失败", err);
  } else {
    console.log("文件写入成功");
  }
});
