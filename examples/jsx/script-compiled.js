/** @jsx vNode */ /** @jsxFrag "Fragment" */

import { View, vNode, VirtualDom } from "@ocdla/view";
// import {createElement, render} from "@ocdla/view";

const React = function () {
  let hooks = [];
  let idx = 0;
  let root = null;
  function useState(initialValue) {
    const state = hooks[idx] || initialValue;
    const _idx = idx;
    const setState = newVal => {
      hooks[_idx] = newVal;
    };
    idx++;
    return [state, setState];
  }
  function useEffect(cb, deps) {
    let oldDeps = hooks[idx];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = deps.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }
    if (hasChanged) cb();
    hooks[idx] = deps;
    idx++;
  }
  function workLoop() {
    idx = 0;
    root.update(vNode(MyComponent, null));
    setTimeout(workLoop, 300);
  }
  let renderIndex = 0;
  function render(Component, selector, oldHooks) {
    oldHooks = oldHooks || [];
    console.log(oldHooks, hooks);
    let vNode = Component();
    let hasChanged = hooks.some((dep, i) => !Object.is(dep, oldHooks[i]));
    idx = 0;
    // let root = document.querySelector(selector);

    if (renderIndex === 0) {
      root = View.createRoot(selector);
    }
    // root.innerHTML = "";
    // const c = Component();
    // c.render();

    // let node = View.createElement(vNode);
    // root.appendChild(node);
    if (renderIndex === 0) {
      root.render(vNode);
    } else if (renderIndex > 0 && hasChanged) {
      root.update(vNode);
    }
    renderIndex++;
    oldHooks = hooks;
    // return c;
    setTimeout(() => render(Component, selector, oldHooks), 750);
  }
  return {
    useState,
    useEffect,
    vNode,
    render
  };
}();
function MyComponent() {
  const [count, setCount] = React.useState(1);
  // const [text, setText] = React.useState("Hello");

  /*React.useEffect(() => {
    console.log("Will do something when count changes");
  }, [count]);
  */
  /*
  return {
    render: () => console.log([count, text]),
    click: () => {
      setCount(count + 1);
    },
    type: (c) => setText(c),
  };
  */
  console.log("count", count);
  return vNode("Fragment", null, vNode("h1", null, "Hello, world!"), vNode("Fragment", null, vNode("span", null, "hello"), vNode("span", null, "goodbye")), vNode("button", {
    onclick: () => setCount(count + 1)
  }, "Click me:" + count));
}
React.render(MyComponent, "#main");

/*
window.App = root.render(MyComponent);
App.click();
App = React.render(MyComponent);
App.click();
App.type("how are you?");
App = React.render(MyComponent);
*/

//# sourceMappingURL=script-compiled.js.map