/**
 * Created by Administrator on 2017/4/29.
 */
console.log("这是2.js模块")
var a = 100;
global.b = 200;

// module.exports.a = a;
exports.a = a;