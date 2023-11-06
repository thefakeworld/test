// function debounce(func, wait, immediate) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate &&!timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

function debounce(func, wait, immediate) {
  let timer;
  return function(...args) {
    if(immediate && !timer){
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

const log = debounce(console.log, 2000, true);
log('hello world');
log('hello world2');
log('hello world3');
log('hello world4');