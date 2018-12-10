/**
 * 组合模式的例子——扫描文件夹
 */

/****************文件夹 *****************/
var Folder = function (name) {
  this.name = name;
  this.parent = null; //增加 this.parent 属性
  this.files = [];
}

Folder.prototype.add = function (file) {
  file.parent = this; //设置父对象
  this.files.push(file);
}

Folder.prototype.remove = function () {
  if (!this.parent) { //根节点或者树外的游离节点
    return;
  }
  for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    var file = files[l];
    if (file === this) {
      files.splice(l, 1);
    }
  }
}

Folder.prototype.scan = function () {
  console.log('开始扫描文件夹: ' + this.name);
  for (var i = 0, file, files = this.files; file = files[i++];) {
    file.scan();
  }
}


/****************文件 *****************/
var File = function (name) {
  this.name = name;
  this.parent = null;
}

File.prototype.add = function () {
  throw new Error('文件下面不能再添加文件');
}
File.prototype.remove = function () {
  if (!this.parent) { //根节点或者树外的游离节点
    return;
  }
  for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    var file = files[l];
    if (file === this) {
      files.splice(l, 1);
    }
  }
}

File.prototype.scan = function () {
  console.log('开始扫描文件: ' + this.name);
};

var folder = new Folder('学习资料');
var folder1 = new Folder('JavaScript');
var folder2 = new Folder('jQuery');

var file1 = new File('JavaScript 设计模式与开发实践');
var file2 = new File('精通 jQuery');
var file3 = new File('重构与模式')

folder1.add(file1);
folder2.add(file2);
folder.add(folder1);
folder.add(folder2);
folder.add(file3);

var folder3 = new Folder('Nodejs');
var file4 = new File('深入浅出 Node.js');
folder3.add(file4);

var file5 = new File('JavaScript 语言精髓与编程实践');

folder.add(folder3);
folder.add(file5);

//  执行
folder.scan()