Function.prototype.before = function(beforefn){
  var _self = this; //  保持原函数的引用
  return function(){  //  返回原函数和新函数的代理函数
    beforefn.apply(this,arguments); //  执行新函数
    return _self.apply(this,arguments);  //  执行原函数
  }
}

Function.prototype.after = function(afterfn){
  var _self = this; 
  return function(){  
   var ret = _self.apply(this,arguments);
   afterfn.apply(this,arguments);
   return ret;
  }
}

var func = function(){
  console.log(2)
}

func = func.before(function(){
  console.log(1)
}).after(function(){
  console.log(3)
})

func()  // 1 2 3  // 这种动态的给函数添加职责和修饰功能在项目中很常见，例如日志统计，安全控制，异常处理等等