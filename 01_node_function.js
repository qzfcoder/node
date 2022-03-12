// node中任何一个模块对被一个函数所包裹
// function (exports, require, module, __filename, __dirname) {

// 为什么要存在这个外层函数
// 用于支持模块化语法,影藏服务器内部实现
// 如何在函数体中输出函数本身,不能在node环境中使用
console.log(arguments.callee.toString());

function demo() {
  console.log(arguments.callee.toString());
}

console.log(__filename); // 当前运行文件路径
console.log(__dirname); // 当前运行文件所在文件夹路径
