//  例子:计算奖金
/**
 * 例如，绩效为 S 的人年
 * 终奖有 4 倍工资，绩效为 A 的人年终奖有 3 倍工资，而绩效为 B 的人年终奖是 2 倍工资。
 * 假设财务部要求我们提供一段代码，来方便他们计算员工的年终奖。
 */

var calculateBouns = function (Level, salary) {
  if (Level == 'S') {
    return salary * 4
  }
  if (Level == 'A') {
    return salary * 3
  }
  if (Level == 'B') {
    return salary * 2
  }
  if (Level == 'C') {
    return salary * 1
  }
}

console.log(calculateBouns('B',10000))

/**
 * 缺点:
 * calculateBonus 函数比较庞大，包含了很多 if-else 语句，这些语句需要覆盖所有的逻辑分支
 * 算法的复用性差，如果在程序的其他地方需要重用这些计算奖金的算法呢？我们的选择只有复制和粘贴
 */