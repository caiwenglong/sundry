---
theme: channing-cyan
highlight: a11y-dark
---

# call apply bind

## `call`
首先先来看看`call` 的使用方式：
```js
/**
 * 
 * @param {*} thisArg 在 function 函数运行时使用的 this 值
 * @param {*} arg1 指定的参数列表。
 * @param {*} arg2 指定的参数列表。
 */
function.call(target, arg1, arg2, ...)
```

```js
Animal = { 
    name: 'Tom', 
    say(age, category) { 
        console.log(`我叫${this.name}, 今年${age}岁了, 是一只${category}`) 
    } 
} 
// 再来只老鼠
Animal1 = { name: 'Jerry' }
Animal.say("3", '猫') // 我叫Tom, 今年3岁了, 是一只猫
Animal.say.call(Animal1, 2, '老鼠') // 我叫Jerry, 今年2岁了, 是一只老鼠
```
> 从call的用法可以看出call方法可以接收N个参数，
> 第一个参数是this指向的对象，
> 第二个参数往后都是指定的参数列表，可以用 ...args来接收
> 所以能先撸一个基本的框架

```js
Function.prototype.myCall1 = function (target, ...args) {
    // 待实现
}
```
我们知道`call`方法的目的就是要更改this的指向,让this指向我们传入的第一个参数对象.那么要如何做才能让调用的方法指向我们传入的这个对象呢?
> 我们在传入的这个对象上面也添加这么一个方法不就行了

```js
Function.prototype.myCall1 = function (target, ...args) {
    // 做个特殊判断,如果没有传入对象,那么this就让它指向window
    target = target || window
    // 在target对象上面新建一个字段来存储被调用的方法，这边就是 say()
      target["say"] = this
      // 下面调用方式就先相当于 target.say()， 这样say里面的this指向就是 target
      result = target["say"](...args)

      //  执行完借用的函数后，要删除掉。这只是借用，要归还的，不能占为己有
      delete target["say"]
      // 返回结果
      return result
       /**************************************************************/
      // 上面的往 target 添加 say 字段有点不严谨，
      // 如果 target 本身就有 say 这个属性，那就BaBiQ了吗？
      // 所以这时 Symbol() 就要登场了: 
      // 因为每个从 Symbol() 返回的 symbol 值都是唯一的，这样就不存在冲突这种东西了
      // 所有这时候就要升级进化一下了，进化结果如下：myCall2
      /**************************************************************/
}
```


```js
// 首先来只猫
Animal = {
  name: 'Tom',
  say(age, category) {
    console.log(`我叫${this.name}, 今年${age}岁了, 是一只${category}`)
  }
}

// 再来只老鼠
Animal1 = {
  name: 'Jerry'
}

/**
 * 从call的用法可以看出它接收N个参数:
 * 1、target: 第一个对象是this要指向的对象
 * 2、从第二个参数开始就要用 ...args 接收
 */
Function.prototype.myCall2 = function (target, ...args) {
  let result;
  target = target || window // 传入的对象

  // 在传入的对象上面新建一个属性字段来存放被调用的方法  这边就是say()方法
  const newFnName = Symbol()
  // 这边的this就是 say(), 赋值完成后 target[newFnName]就相当于say() 
  target[newFnName] = this
  // 下面调用方式就先相当于 target.say()， 这样say里面的this指向就是 target
  result = target[newFnName](...args)

  //  执行完借用的函数后，要删除掉。这只是借用，要归还的，不能占为己有，不道德
  delete target[newFnName]

  // 返回执行的结果
  return result
}

Animal.say("3", '猫') // 我叫Tom, 今年3岁了, 是一只猫
Animal.say.myCall2(Animal1, 2, '老鼠') // 我叫Jerry, 今年2岁了, 是一只老鼠
```

## apply
`apply` 跟 `call` 的区别就是 `call` 接收的参数是有多个,而`apply`的参数就接收两个,`apply`的第二个参数是数组


```js
function.call(target, arg1, arg2, arg3, ...)
function.apply(target, [arg1, arg2, arg3, ...])
```
所以`apply` 的实现方式跟 `call`基本一样,就参数的接收方式不同而已,代码如下:

```js
 Function.prototype.myApply = function (target, args) {
  let result;
  target = target || window
  const newFuName = Symbol()
  target[newFuName] = this
  result = target[newFuName](...args)
  delete target[newFnName]
  return result
}
```
对比一下 `call` 的实现:

```js
Function.prototype.myCall2 = function (target, ...args) {
  let result;
  target = target || window
  const newFnName = Symbol()
  target[newFnName] = this
  result = target[newFnName](...args)
  delete target[newFnName]
  return result
}
```

## bind
首先先看看 `bind` 的用法:
```js
// 首先来只猫
Animal = {
  name: 'Tom',
  say(hi ,age, category) {
    console.log(`${hi},我叫${this.name}, 今年${age}岁了, 是一只${category}`)
  }
}

// 再来只老鼠
Animal1 = {
  name: 'Jerry'
}

const newSay = Animal.say.bind(Animal1, "hello")
newSay(2,"老鼠") // hello,我叫Jerry, 今年2岁了, 是一只老鼠
```
`bind`的特点:
-   bind本身是个方法，返回值也是个方法，一般调用bind方法的也是个方法...别懵
-   接受的第一个参数是一个对象，哪个方法调用bind方法，那么这个方法中的this，就是指向这个对象

## 开始bind的旅程
1. 首先来个基础的骨架：
    

```js
Function.prototype.myBind = function(target, ...outArgs) {
    target = target || {} // 处理边界情况
    // bind 返回的是一个函数，这个函数也可以接收多个参数
    return function(...innerArgs) {}
}
```
2. 和实现`call` 和`apply` 一样，在`target` 添加一个唯一的属性名来放要借用的方法

```js
Function.prototype.myBind = function(target, ...outArgs) {
    target = target || {} // 处理边界情况
    
    const newFnName = Symbol()
    target[newFnName] = this // this 就是要借用的方法
    
    // bind 返回的是一个函数，这个函数也可以接收多个参数
    return function(...innerArgs) {
        // 执行一下借来的方法，将结果返回回去即可
        let result = target[newFnName](...outArgs, ...innerArgs)
        return result
    }
}
```
测试一下：
```js
// 首先来只猫
Animal = {
  name: 'Tom',
  say(hi ,age, category) {
    console.log(`${hi},我叫${this.name}, 今年${age}岁了, 是一只${category}`)
  }
}

// 再来只老鼠
Animal1 = {
  name: 'Jerry'
}

const newSay = Animal.say.myBind(Animal1, "hello")
newSay(2,"老鼠") // hello,我叫Jerry, 今年2岁了, 是一只老鼠
```