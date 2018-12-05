var reverseEach = function(arr,callbackv){
  for(var len=arr.length-1;len>=0;len--){
    callbackv(len,arr[len])
  }
}

reverseEach([0,1,2],function(i,n){
  console.log(n)
})