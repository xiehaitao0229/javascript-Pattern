/**
 * 例子:万能遥控器，包含了打开空调、打开电视和音响、关门、开电脑、登录 QQ 这 3 个命令
 */

var MacroCommand = function () {
  return {
    commandList: [],
    add: function (command) {
      this.commandList.push(command);
    },
    execute: function () {
      for (var i = 0,command; command = this.commandList[i++];) {
        command.execute()
      }
    }
  }
}

//  打开空调
var openAcCommand = {
  execute: function () {
    console.log('打开空调');
  },
  add:function(){
    throw new Error( '叶对象不能添加子节点' ); 
  }
}

/**************** 家里的电视和音响是连接在一起的，所以可以用一个宏命令来组合打开电视和打开音响的命令 ***************/
var openTvCommand = {
  execute: function () {
    console.log('打开电视');
  },
  add:function(){
    throw new Error( '叶对象不能添加子节点' ); 
  }
}

var openSoundCommand = {
  execute: function () {
    console.log('打开音响');
  },
  add:function(){
    throw new Error( '叶对象不能添加子节点' ); 
  }
}

var macroCommand1 = MacroCommand();
macroCommand1.add(openTvCommand);
macroCommand1.add(openSoundCommand);

var closeDoorCommand = {
  execute: function () {
    console.log('关门');
  },
  add:function(){
    throw new Error( '叶对象不能添加子节点' ); 
  }
}

var openPcCommand = {
  execute: function () {
    console.log('开电脑')
  },
  add:function(){
    throw new Error( '叶对象不能添加子节点' ); 
  }
}

var openQQCommand = {
  execute: function () {
    console.log('登录 QQ');
  },
  add:function(){
    throw new Error( '叶对象不能添加子节点' ); 
  }
};

var macroCommand2 = MacroCommand();
macroCommand2.add(closeDoorCommand);
macroCommand2.add(openPcCommand);
macroCommand2.add(openQQCommand); 

//  把所有的命令组合起来
var macroCommand = MacroCommand();
macroCommand.add(openAcCommand);
macroCommand.add(macroCommand1)
macroCommand.add(macroCommand2)


macroCommand.execute()