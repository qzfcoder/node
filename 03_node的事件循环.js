// Node的时间循环机制

/*
第一阶段 timers
  定时器阶段 setTimeout setInterval
    1 开始计时
    2 执行定时器的回调
第二阶段 pending callbacks
  系统阶段
    准备系统的东西
第三阶段 idle prepare
  准备阶段
第四阶段 poll
  轮询阶段 核心
    进行判断,如果回调队列中存在待执行的回调函数
    从回调队列中取出回调函数,同步执行,依次执行,直到回调队列为空,或者达到系统最大限度
    如果回调队列为空,
      如果有设置过,setimmediate
      进入下一个check阶段
      没有设置过
      停留,等待回调函数被插入
      若定时器到点了,也进入下一个check姐u但
第五阶段 check
  专门执行setImmediate所设置的回调
第六阶段 close callbacks

process.nextTick() //用于设置立即执行函数,能够有限执行,

*/

/**
 * clearImmediate 清空立即执行函数
 * clearInterval 清除循环定时器
 * clearTimeout 清除延迟定时器
 *
 * setImmediate 设置立即执行函数
 * setInterval 设置循环定时器
 * setTimeout 设置延迟定时器
 */

// // 立即执行函数（回调）
setImmediate(()=>{
  console.log('我是他指定的回调') // 3
})

// 延迟执行函数
setTimeout(() => {
  console.log("setTimeout"); // 若为0 则是第二,佛则最后
});

// 立即执行函数
process.nextTick(() => {
  console.log("process.nextTick所指定的回调执行了"); // 1
});

console.log("我是主线程上面的代码"); // 若存在主线程 settimeout一定在前 若无 settimeout和setimmediate顺序不一定
