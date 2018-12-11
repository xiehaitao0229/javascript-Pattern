/**
 * JavaScript 没有抽象类的缺点和解决方案
 * 方案是让 Beverage.prototype.brew 等方法直接抛出一个异常，如果因为粗心忘记编写 Coffee.prototype.brew 方法，那么至少我们会在程序运行时得到一个错误：
 */

 //  抽象父类
var Beverage = function () { };
Beverage.prototype.boilWater = function () {
  console.log('把水煮沸');
};
Beverage.prototype.brew = function () { 
  throw new Error( '子类必须重写 brew 方法' ); 
}; // 空方法，应该由子类重写
Beverage.prototype.pourInCup = function () {
  throw new Error( '子类必须重写 pourInCup 方法' ); 
 }; // 空方法，应该由子类重写
Beverage.prototype.addCondiments = function () { 
  throw new Error( '子类必须重写 addCondiments 方法' ); 
}; // 空方法，应该由子类重写
Beverage.prototype.init = function () {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};

//  创建 Coffee 子类和 Tea 子类
var Coffee = function () { };
Coffee.prototype = new Beverage();  //  继承父类
Coffee.prototype.brew = function () {
  console.log('用沸水冲泡咖啡');
};
Coffee.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子');
}; 
Coffee.prototype.addCondiments = function(){ 
  console.log( '加糖和牛奶' ); 
 }; 
 var Coffee = new Coffee(); 
 Coffee.init(); 

console.log('-------------------')

 var Tea = function(){}; 
Tea.prototype = new Beverage(); 
Tea.prototype.brew = function(){ 
 console.log( '用沸水浸泡茶叶' ); 
}; 
Tea.prototype.pourInCup = function(){ 
 console.log( '把茶倒进杯子' ); 
}; 
Tea.prototype.addCondiments = function(){ 
  console.log( '加柠檬' ); 
 }; 
 var tea = new Tea(); 
 tea.init(); 