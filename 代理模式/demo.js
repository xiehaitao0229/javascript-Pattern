/**
 * 例子1:小明追女神A的时候，需要女神A和小明共同认识的好友B，通过B来代理送花给女神A
 */

var Flower = function () { };

var xiaoming = {
  sendFlower: function (target) {
    var flower = new Flower();
    target.receiveFlower(flower);
  }
}

var B = {
  receiveFlower: function (flower) {
    A.receiveFlower(flower)
  }
}

var A = {
  receiveFlower: function (flower) {
    console.log('收到花' + flower);
  }
}

xiaoming.sendFlower(B)

