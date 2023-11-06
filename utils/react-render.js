// https://pomb.us/build-your-own-react/
function createElement(type, props, ...children) {
  console.log(type, props, children)
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function render(element, container) {
  // 真实dom
  const dom = element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);
  
  const isProperty = key => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });
    console.log('dom', dom)
  // 递归创建真实dom
  element.props.children.forEach(child => render(child, dom));
  console.log(dom)
  container.appendChild(dom);
}

const Didact = {
  createElement,
  render
};
// 告诉babel 用Didact.createElemen这个方法解析jsx
/** @jsx Didact.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
  </div>
);
const container = document.getElementById("root");
Didact.render(element, container);
