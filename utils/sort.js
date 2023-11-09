function bubleSort(arr) {
  var len = arr.length;
  for (let outer = len ; outer >= 2; outer--) {
      for(let inner = 0; inner <=outer - 1; inner++) {
          if(arr[inner] > arr[inner + 1]) {
              [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]]
          }
      }
  }
  return arr;
}

// 作者：郭东东
// 链接：https://juejin.cn/post/6844903776512393224
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。