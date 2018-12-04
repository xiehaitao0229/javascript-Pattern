//  虚拟代理实现图片预加载
/**
 * ，图片预加载是一种常用的技术，如果直接给某个 img 标签节点设置 src 属性，
    由于图片过大或者网络不佳，图片的位置往往有段时间会是一片空白。常见的做法是先用一张
    loading 图片占位，然后用异步的方式加载图片，等图片加载好了再把它填充到 img 节点里，这种
    场景就很适合使用虚拟代理。
 */

var myImage = (function () {
  var imageNode = document.createElement('img');
  document.body.appendChild(imageNode);

  return {
    setSrc: function (src) {
      imageNode.src = src
    }
  }
})()

var proxyImage = (function () {
  var img = new Image;
  img.onload = function () {
    myImage.setSrc(this.src)
  }
  return {
    setSrc: function (src) {
      myImage.setSrc('file:// /C:/Users/svenzeng/Desktop/loading.gif');
      img.src = src;
    }
  }
})()

proxyImage.setSrc('http:// imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg'); 