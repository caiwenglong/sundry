# 一些零碎的东西

## webstorm 调试vue代码，需要先把项目跑起来，然后在进行debugger

## 在vue中如果 input 输入值的时候没有反应，说明这个input绑定的值不是响应式的，可以通过const reactiveObject = Vue.observable({ value: item }) 来创建一个响应式对象