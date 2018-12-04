let isType = function(type){
  return function(obj){
    return Object.prototype.toString.call(obj)==='[object '+type+']';
  }
}

var isArray = isType('Array');
console.log(isArray([1,2,3]))