function foo() {
  console.log("foo");
}

const fooProxy = new Proxy(foo, {
  apply: function (target, thisArg, paramsArr) {
    console.log("apply捕捉器");
    Reflect.apply(thisArg, paramsArr);
  },
  construct: function (target, paramsArr) {
    console.log("construct捕捉器");
    return new Reflect.construct(paramsArr);
  },
});

// 作者：copyer_xyf
// 链接：https://juejin.cn/post/7126352717458440200
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。