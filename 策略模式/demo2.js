/**
 * 用策略模式面向对象方式重构代码
 * 一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类，策略类封装了具体
的算法，并负责具体的计算过程。第二个部分是环境类 Context，Context 接受客户的请求，随后
把请求委托给某一个策略类。要做到这点，说明 Context 中要维持对某个策略对象的
 */

 var performanceS = function(){};

 performanceS.prototype.calculate = function(salary){
   return salary*4
 }

 var performanceA = function(){};

 performanceS.prototype.calculate = function(salary){
   return salary*3
 }

 var performanceB = function(){};

 performanceS.prototype.calculate = function(salary){
   return salary*2
 }

 var performanceC = function(){};

 performanceS.prototype.calculate = function(salary){
   return salary*1
 }

 //  定义奖金类Bouns
var Bouns = function(){
  this.salary = null; //  原始工资
  this.strategy = null;  //  绩效对应的策略类
}

Bouns.prototype.setSalary = function(salary){
  this.salary = salary; //  设置员工的原始工资
}

Bouns.prototype.setStrategy = function(strategy){
  this.strategy = strategy;  //  设置员工绩效等级的策略对象
}

Bouns.prototype.getBouns = function(){
  return this.strategy.calculate(this.salary);  //  把计算奖金的操作委托给对应的策略对象
}

var bouns = new Bouns();

bouns.setSalary(20000);
bouns.setStrategy(new performanceA());

console.log(bouns.getBouns()) // 60000

