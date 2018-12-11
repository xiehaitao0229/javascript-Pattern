/**
 * 需求：
 * 4 个冲泡饮料的步骤适用于咖啡和茶，在我们的饮料店里，根据这 4 个步骤制作出来的咖
啡和茶，一直顺利地提供给绝大部分客人享用。但有一些客人喝咖啡是不加调料（糖和牛奶）的。
既然 Beverage 作为父类，已经规定好了冲泡饮料的 4 个步骤，那么有什么办法可以让子类不受这
个约束呢？
放置钩子是隔离变化的解决方案
 */


var Beverage = function () { };
Beverage.prototype.boilWater = function () {
  console.log('把水煮沸');
};
Beverage.prototype.brew = function () {
  throw new Error('子类必须重写 brew 方法');
};
Beverage.prototype.pourInCup = function () {
  throw new Error('子类必须重写 pourInCup 方法');
};
Beverage.prototype.addCondiments = function () {
  throw new Error('子类必须重写 addCondiments 方法');
};
Beverage.prototype.customerWantsCondiments = function () {
  return true; // 默认需要调料
};

Beverage.prototype.init = function () {
  this.boilWater();
  this.brew();
  this.pourInCup();
  if (this.customerWantsCondiments()) { // 如果挂钩返回 true，则需要调料
    this.addCondiments();
  }
};
var CoffeeWithHook = function () { };
CoffeeWithHook.prototype = new Beverage();
CoffeeWithHook.prototype.brew = function () {
  console.log('用沸水冲泡咖啡');
};
CoffeeWithHook.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子');
};
CoffeeWithHook.prototype.addCondiments = function () {
  console.log('加糖和牛奶');
};
CoffeeWithHook.prototype.customerWantsCondiments = function () {
  return window.confirm('请问需要调料吗？');
};
var coffeeWithHook = new CoffeeWithHook();
coffeeWithHook.init(); 