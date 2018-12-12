/**
 * 例子:有个内衣工厂，目前的产品有 50 种男式内衣和 50 种女士内衣，为了推销产品，工厂决
定生产一些塑料模特来穿上他们的内衣拍成广告照片。正常情况下需要 50 个男模特和 50 个女
模特，然后让他们每人分别穿上一件内衣来拍照。不使用享元模式的情况下，在程序里也许会这样写
 * 
 */

var Model = function (sex, underwear) {
  this.sex = sex;
  this.underwear = underwear;
};
Model.prototype.takePhoto = function () {
  console.log('sex= ' + this.sex + ' underwear=' + this.underwear);
};
for (var i = 1; i <= 50; i++) {
  var maleModel = new Model('male', 'underwear' + i);
  maleModel.takePhoto();
};
for (var j = 1; j <= 50; j++) {
  var femaleModel = new Model('female', 'underwear' + j);
  femaleModel.takePhoto();
};


//  改写代码成享元模式
var Model = function (sex) {
  this.sex = sex;
}

Model.prototype.takePhoto = function () {
  console.log('sex= ' + this.sex + ' underwear=' + this.underwear);
}

//  分别创建一个男模特对象和一个女模特对象：
var maleModel = new Model('male'),
  femaleModel = new Model('female');

for (var i = 1; i <= 50; i++) {
  maleModel.underwear = 'underwear' + i;
  maleModel.takePhoto();
};

for (var j = 1; j <= 50; j++) {
  femaleModel.underwear = 'underwear' + j;
  femaleModel.takePhoto();
};

//  改进前一共是要创建100个对象，改进后使用享元模式只创建了2个对象