/**
 * Created by Administrator on 2017/4/29.
 */
//一个文件就是一个模块
//每个模块都都有自己作用域
//我们使用var 声明一个变量, 他不是属于全局的 ,而是属于当前模块下的
/*
var a = 100;
console.log(a);
global.a = 200;
console.log(global.a);
console.log(a);
global.b = 300;
console.log(b);*/

// console.log(__filename)
// console.log(__dirname)

/*
 *模块加载系统
 *
 * require("模块名")
 * */

//require("./2.js");
//console.log(__dirname)
//require("E:/webProject/NODE JS/module/2.js")


/*在一个模块中通过var 定义的变量,其作用域范围是当前模块,外部不能直接的访问,, 如果我们想一个模块访问另一个模块定义的变量
1 \ 把变量作为global对象的一个属性,不推荐
2\ 使用模块对象module   modul 保存 和提供当前模块有关的一些信息
*  在module对象下 有个自对象 exports对象,  我们可以通过这个对象把一个模块中的局部变量对象进行访问
* */
var m2 = require("./2.js");  //这个方法的返回值,其实就是被加载模块中的module.exports;
// console.log(a);
// console.log(b);
// console.log(m2);
// console.log(m2.a)
/*
* */
// console.log(module);

/*
* 在模块作用域,患有一个内在的模块对象, exports   它其实和module.exports 是同一个对象
* */
// console.log(exports === module.exports,exports);  //true
console.log(m2);
