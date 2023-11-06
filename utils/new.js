function Car(color) {
  if (!new.target) {
      console.log(this);
    console.log(this === Car);
    console.log(this instanceof Car);
    console.log(new.target);
    // Called as function.
    return `${color} car`;
  }
    console.log(this);
    console.log(new.target === this);
    console.log(this === Car);
    console.log(new.target === Car);
    console.log(this instanceof Car);
  // Called with new.
  this.color = color;
}

const a = Car("red"); // a is "red car"
const b = new Car("red"); // b is `Car { color: "red" }`

// 执行时绑定 this window 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。
// 默认绑定 < 隐式绑定 < 显示绑定（bind） < new绑定

```javascript
  https://juejin.cn/post/7132032582832635934
  ### 隐式绑定
  function foo() {
    console.log(this.a)
  }

  const obj = {
    a: 2,
    foo: foo
  }

  // 通过 obj 对象调用 foo 函数
  obj.foo() // 2
```
