# 防抖节流

# debounce

```js
/**
 *  防抖：就是在规定的时间内只触发一次，如果在该时间内又触发了一次或者多次，那么将会重置这个时间。
 *  列子：1、比如电脑休眠：当设置十分钟后电脑自动休眠，如果在这一段时间每不碰电脑，那么电脑就会在十分钟后进入休眠，
 *        但是如果，在这一段时间内碰了鼠标或者键盘，比如五分中后碰了鼠标，那么就会重新计算时间，得在等10分钟后才能进入休眠
 *        2、比如玩游戏回城：当点击了回城之后，要等8秒才能回城，如果这一段时间内移动了，那么重新回城还要继续等8秒
 *  应用： 用户在输入框内输入内容搜索的时候，等用户输入完成后才进行搜索，而不是每按一次键就发送一次搜索请求
 */

/**
 * 防抖函数
 * @param fn
 * @param delay
 */
const debounce = (fn, delay) => {
  // 设置一个定时器变量
  let timeoutID = null
  return function(args) {
    const _this = this
    // 清除上一个定时器
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      // 调用要执行的方法fn
      fn.call(_this, args)
    }, delay)
  }
}
```

## throttle

```js
/**
 * 节流：在delay的时间内只调用一次，比如： delay = 1000, 那么在一秒内只会调用一次，如果调用多次，那么就只要第一次调用的才会生效
 * @param fn
 * @param delay：
 */
const throttle = (fn, delay) => {
  let isLock = false
  return function(args) {
    console.log(isLock)
    if(isLock) return
    isLock = true
    const _this = this
    setTimeout(() => {
      fn.call(_this, args)
      isLock = false
    },delay)
  }
}
```