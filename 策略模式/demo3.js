/**
 * JavaScript 版本的策略模式
 */

var strategory = {
  'S': function (salary) {
    return salary * 4
  },
  'A': function (salary) {
    return salary * 3
  },
  'B': function (salary) {
    return salary * 2
  },
  'C': function (salary) {
    return salary * 1
  }
}

var calculateBouns = function(level,salary){
  return strategory[level](salary);
}

console.log(calculateBouns('A',6000))