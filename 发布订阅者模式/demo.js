/**
 * 实现发布-订阅者模式的通用实现
 */

 class Event {
   constructor(){
    this.clientList = []
   }

     //  订阅事件
   listen(key,fn){
    if(!this.clientList[key]){
      this.clientList[key] = []
    }
    this.clientList[key].push(fn);  //  订阅的消息添加进缓存列表
   }

    //  发布订阅事件
   trigger(){
    var key = Array.prototype.shift.call(arguments);  //  拿到订阅者
    var fns = this.clientList[key]

    if(!fns || fns.length === 0 ){
      //  如果没有绑定对应的消息
      return false;
    }
    
    for( var i = 0, fn; fn = fns[ i++ ];){
      fn.apply(this,arguments);  //  arguments是trigger时带上的参数
    }
   }

//  取消订阅事件
   remove(key,fn){
    var fns = this.clientList[key];

    if(!fns){
      //  如果没有传入具体的回调函数，表示需要取消key对应的所有订阅事件
      fns && (fns.length=0);
    }else{
      for(var j = fns.length-1;j>=0;j--){
        //  反向遍历订阅的回调函数列表
        var _fn = fns[j];
        if(_fn===fn){
          fns.splice(j,1);  //  删除订阅者的回调函数
        }
      }
    }
   }
 }


var event = new Event()
event.listen( 'squareMeter88', function( price,squareMeter ){ // 小明订阅消息
  console.log( '价格= ' + price +' 面积= '+squareMeter ); 
 }); 
 
 event.trigger( 'squareMeter88', 2000000,88 ); 
