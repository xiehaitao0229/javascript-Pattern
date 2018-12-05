var myEach = function(arr,callback){
  for(var i=0,len=arr.length;i<len;i++){
    callback.call(arr[i],i,arr[i]);
  }
}

myEach([1,2,3],function(i,item){
  console.log(i,item)
})