var Iterator = function(obj){
  var current = 0;

  var next = function(){
    current++;
  }

  var isDone = function(){
    return current >=obj.length;
  }

  var getCurrentItem = function(){
    return obj[current];
  }

  return {
    next:next,
    isDone:isDone,
    getCurrentItem:getCurrentItem
  }
}