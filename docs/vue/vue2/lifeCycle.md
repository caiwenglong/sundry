# vue2 生命周期以及该阶段的作用

### 1.  什么是vue生命周期？
> 生命周期是指vue实例从创建到销毁的过程

### 2. 生命周期的作用是什么？
> 给予了开发者在不同时间段执行指定代码的能力

### 3. vue生命周期的几个阶段以及该阶段的作用
    1.1 beforeCreate： new Vue() 之后触发的第一个钩子，在这个阶段
        data, methods, computed y以及watch上的数据跟方法都不能被访问
    
    1.2 created： 在示例创建完成后执行，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，
    在这边更改数据不会触发 updated 函数，在这个阶段可以做一些初始化的数据，但在当前阶段无法与DOM进行交互
        如果要与DOM进行交互，那么可以通过vm.$nextTick来实现
        |- nextTick的作用：在下一次DOM更新循环结束之后执行延迟回调
            在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中
        |- nextTick中有个callbacks 数组，用来存储传入的cb函数
        |- 有个状态pending ，如果pending是false，那么就说明本轮事件中还没有执行timerFunc()
        关于timerFunc：nextTick就是在这个方法中执行异步回调函数的
            这个方法会去判断当前环境是否支持以下四个方法，优先级如下：
            1.1.1. promise
            1.1.2. mutationObserver：HTML5的api，中文意思是：修改的监听
                用来监听DOM的变动，比如节点或者节点属性或者文本的增改等都会触发mutationObserver
                mutationObserver跟事件的区别是：
                    事件是同步触发的，DOM的变动会立即触发事件
                    而mutationObserver事件是异步触发的，DOM的改变不会立即触发mutationObserver，而是需要等当前所以等DOM操作完才会触发
            1.1.3. setImmediate
            1.1.4. setTimeout

    1.3 beforeMounted: 发生在挂在载之前，template已经导入了渲染函数进行编译，这时虚拟DOM已经创建完成，即将开始渲染，这时对数据进行修改不会触发update
    1.4 mounted：在DOM元素挂载之后执行，这时真实的DOM已经渲染完成，数据完成双向绑定，可以访问DOM节点了，可以使用$refs对DOM进行操作
    1.5 beforeUpdated: 发生在更新数据之前，可以在这边对数据进行更改，不会造成重复渲染
    1.6 updated: 数据更新完成，在这阶段避免对数据进行更改，不然可能导致页面循环更新，导致页面性能低
    1.7 beforeDestroy: 实例销毁之前触发，当前阶段还没销毁实例，依然进行DOM操作，这边可以做一些收尾工作，比如定时器清除之类的操作
    1.8 destroyed：实例销毁之后触发，这时实例已经被销毁

    页面第一次加载会触发哪几个钩子？会触发以下4个钩子
    1. beforeCreated
    2. created
    3. beforeMounted
    4. mounted

4. vue路由的实现
    4.1 hash路由和history路由模式的实现原理
        4.1.1 hash路由：hash路由会带一个#号，在#号后面会携带一个hash值，更具hashChange可以拿到这个hash值，根据这个hash的的变化即可实现页面更新
        4.1.2 history：history主要是根据HTML5 发布的两个API（pushState和relpaceState）来实现的这两个方法可以改变地址栏

    4.2 vueRouter有哪几种路由守卫？ 有3种导航守卫
        4.2.1 全局钩子：beforeEach.  beforeResolve.  afterEach
        4.2.2 路由独享守卫：beforeEnter
        4.2.3 组件内的守卫：beforeRouteEnter. beforeRouteUpdate. beforeRouteLeave

    4.3 vueRouter导航的解析流程
        1. 导航触发，如果是第一次导航，那么就会调用beforeEach
            如果不是第一次导航，那么就会调用失活组件里面的 beforeRouteLeave，然后回到全局路由调用beforeEach
        2. 如果导航的路由跟原来一样
            那么就会调用beforeRouteUpdate
            如果不是原来的导航，那么就会调用路由独享守卫 beForeEnter
        3. 进入到新的页面后就会调用组件里面的路由守卫 beforeRouteEnter
        4. 进入完成后就会调用beforeResolve，这时导航就会被确认
        5. 导航被确认之后就会调用全局后置钩子afterEach触发DOM更新
        6. 如果beforeRouteEnter守卫中有nextTick，那么就执行nextTick中的回调函数

# 生命周期
### 1. 导航守卫
   * 触发进入其他路由，这时第一个调用的是beforeRouteLevae
   * beforeEach：在路由跳转前被触发
   * 如果是跳转到当前的组件，那么就会调用beforeRouteUpdate
   * 如果是跳转到其他路由，那么就会调用beforeEnter
   * 在进入组件后，在组件中调用beforeRouteEnter
   * beforeRouteEnter执行之后会调用全局解析路由beforeResolve，这时，导航被确认
   * 导航被确认之后，会调用全局后置钩子afterEach
   * 最后如果beforeRouteEnter中如果有 next的回调函数，则会执行该回调函数


将路由导航. `keep-alive`. 和组件生命周期钩子结合起来的，触发顺序，假设是从a组件离开，第一次进入b组件：

1.  `beforeRouteLeave`:路由组件的组件离开路由前钩子，可取消路由离开。
2.  `beforeEach`: 路由全局前置守卫，可用于登录验证. 全局路由loading等。
3.  `beforeEnter`: 路由独享守卫
4.  `beforeRouteEnter`: 路由组件的组件进入路由前钩子。
5.  `beforeResolve`:路由全局解析守卫
6.  `afterEach`:路由全局后置钩子
7.  `beforeCreate`:组件生命周期，不能访问`this`。
8.  `created`:组件生命周期，可以访问`this`，不能访问dom。
9.  `beforeMount`:组件生命周期
10.  `deactivated`: 离开缓存组件a，或者触发a的`beforeDestroy`和`destroyed`组件销毁钩子。
11.  `mounted`:访问/操作dom。
12.  `activated`:进入缓存组件，进入a的嵌套子组件(如果有的话)。
13.  执行beforeRouteEnter回调函数next。

