/**
 * 菜单程序
 * 正在编写一个用户界面程序，该用户界面上至少有数十个 Button 按钮。因为项目
  比较复杂，所以我们决定让某个程序员负责绘制这些按钮，而另外一些程序员则负责编写点击按
  钮后的具体行为，这些行为都将被封装在对象里。
  javascript实现命令模式
 */

/**
 * <button id="button1">点击按钮 1</button> 
 * <button id="button2">点击按钮 2</button> 
   <button id="button3">点击按钮 3</button> 
 */

let btn1 = document.getElementById('button1')
let btn2 = document.getElementById('button2')
let btn3 = document.getElementById('button3')

let MenuBar = {
  refresh: function () {
    console.log('刷新菜单目录')
  }
}

let SubMenu = {
  add: function () {
    console.log('增加子菜单')
  },
  del: function () {
    console.log('删除子菜单');
  }
}

//  设置命名的函数
let setCommand = function (button, func) {
  button.onclick = function () {
    func()
  }
}

var RefreshMenuBarCommand = function( receiver ){ 
  return function(){ 
  receiver.refresh(); 
  } 
 }; 

let refreshMenuCommand = RefreshMenuBarCommand(MenuBar);

setCommand(btn1,refreshMenuCommand)


