---
theme: channing-cyan
---
# keep-alive简单理解

## .1 keep-alive 是什么？

    keep-alive: 是vue的一个内置组件，它能在vue组件切换过程中中将状态保留在内存中，防止重复渲染DOM
    keep-alive 有以下几个属性：
    1. include： 接受的值类型是字符串或者正则表达式
    2. exclude： 接受的值类型是字符串或者正则表达式
    3. max: 接受的值类型是数字，表示最多可以缓存几个组件实列

keep-alive 用法如下：

```js
<keep-alive>
  <component :is="view"></component>
</keep-alive>

```

使用`includes`和`exclude`：

```js
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>

```

设置了 keep-alive 缓存的组件，会多出两个生命周期钩子`activated` 与 `deactivated`，生命周期钩子执行顺序如下：

首次进入：

1.  `beforeEach`: 路由全局守卫
2.  `beforeEnter`：路由独享守卫
3.  `beforeRouteEnter`: 组件内路由组件前置钩子
4.  `beforeResolve`: 路由全局解析守卫，
    *   `beforeResolve`跟`beforeEach`的区别是`beforeEach`是在路由解析之前执行，`beforeResolve`是在路由解析之后执行
5.  `afterEach`:路由全局后置钩子

> 路由生命周期钩子执行完成之后，接下来就会执行组件的生命周期钩子：

6.  `beforeCreate`: 这个钩子是 `new Vue()` 执行之后触发的第一个 i 钩子
    *   `在这个阶段 data,methods,computed,watch上的数据和方法都不能被访问`

7.  `created`:

    *   这个阶段已经完成了数据观测，在这个阶段可以使用、修改数据
    *   但是这边修改数据不会触发 updated 生命周期的钩子，在这个阶段可以做一些数据初始化
    *   这个阶段不能与 `DOM` 进行交互，如果要与 `DOM` 进行交互，可以使用 `Vue.nextTick()` 方法来实现

        *   `nextTick` 的作用：在下一次 `DOM` 更新循环结束之后执行的延迟回调函数<br>
        *   `nextTick` 的使用场景：在数据变化之后，该数据数据的该表会影响 `DOM` 的结构，而这时要对 `DOM` 进行操作，那么这个操作应该要等触发 view 更新完之后才执行，这时，这个操作应该放入`Vue.nextTick()`的回调函数中.

8.  `beforeMounted`: 发生在挂在载之前，template 已经导入了渲染函数进行编译，这时虚拟 `DOM` 已经创建完成，即将开始渲染，这时对数据进行修改不会触发 update

9.  `mounted`：在 `DOM` 元素挂载之后执行，这时真实的 `DOM` 已经渲染完成，数据完成双向绑定，可以访问 `DOM` 节点了，可以使用\$refs 对 `DOM` 进行操作

10. `activated`: 如果该组件有通过 `keep-alive` 包裹，那么从其他组件重新进入这个组件时，这个钩子就会被执行

11. `beforeUpdated`: 发生在更新数据之前，可以在这边对数据进行更改，不会造成重复渲染

12. `updated`: 数据更新完成，在这阶段避免对数据进行更改，不然可能导致页面循环更新，导致页面性能低

13. `beforeRouteLeave`: 路由离开组件时触发,它在组件销毁前执行

14. `deactivated`: 缓存组件失活

15. `beforeDestroy`: 实例销毁之前触发，当前阶段还没销毁实例，依然进行 `DOM` 操作，这边可以做一些收尾工作，比如定时器清除之类的操作

16. `destroyed`：实例销毁之后触发，这时实例已经被销毁

## keep-alive 代码实现如下：

```js
export default {
  name: "keep-alive",
  abstract: true,

  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number],
  },

  created() {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed() {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted() {
    this.$watch("include", (val) => {
      pruneCache(this, (name) => matches(val, name));
    });
    this.$watch("exclude", (val) => {
      pruneCache(this, (name) => !matches(val, name));
    });
  },

  render() {
    /* 获取默认插槽中的第一个组件节点 */
    const slot = this.$slots.default;
    const vnode = getFirstComponentChild(slot);
    /* 获取该组件节点的componentOptions */
    const componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      /* 获取该组件节点的名称，优先获取组件的name字段，如果name不存在则获取组件的tag */
      const name = getComponentName(componentOptions);

      const { include, exclude } = this;
      /* 如果name不在inlcude中或者存在于exlude中则表示不缓存，直接返回vnode */
      if (
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode;
      }

      const { cache, keys } = this;
      /* 获取组件的key值 */
      const key =
        vnode.key == null
          ? // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
            componentOptions.Ctor.cid +
            (componentOptions.tag ? `::${componentOptions.tag}` : "")
          : vnode.key;
      /*  拿到key值后去this.cache对象中去寻找是否有该值，如果有则表示该组件有缓存，即命中缓存 */
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        /* 如果没有命中缓存，则将其设置进缓存 */
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        /* 如果配置了max并且缓存的长度超过了this.max，则从缓存中删除第一个 */
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0]);
  },
};
```

实现思路：

1.  首先该组件接受三个属性：include,exclude,max
2.  在组件开始执行 `created` 生命周期之后就创建一个 `keys` 数组(用来保存组件的 key)和一个 `cache` 对象(用来存储要缓存组件的 key 和 VNode )
    *   cache 对象结构如下：
    ```js
    this.cache = {
      key1: "组件1",
      key2: "组件2",
      // ...
    };
    ```
3.  当组件执行 `mounted` 生命钩子之后，会对属性 `include` 和 `exclude` 进行监听，当`include` 和 `exclude`的值发生变化的时候会执行 `pruneCache()` 函数对不需要缓存的组件进行清除操作, 对属性 `include` 和 `exclude` 的监听 和 `pruneCache()`函数代码如下：

```js
    mounted() {
        this.$watch('include', val => {
            pruneCache(this, name => matches(val, name))
        })
        this.$watch('exclude', val => {
            pruneCache(this, name => !matches(val, name))
        })
    }
```

```js
function pruneCache(keepAliveInstance, filter) {
  const { cache, keys, _vnode } = keepAliveInstance;
  for (const key in cache) {
    const cachedNode = cache[key];
    if (cachedNode) {
      const name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}
```

> 其中 `pruneCacheEntry()` 函数的作用是用来剔除不需要缓存的组件，`pruneCacheEntry()` 的代码如下：

```js
function pruneCacheEntry(
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const cached = cache[key];
  /* 判断当前没有处于被渲染状态的组件，将其销毁 */
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}
```

4.  keep-alive 对组件的缓存实现是在 `render()` 函数中实现的，实现步骤如下：

    1.  首先获取组件的 key 值：

    ```js
    const key =
      vnode.key == null
        ? componentOptions.Ctor.cid +
          (componentOptions.tag ? `::${componentOptions.tag}` : "")
        : vnode.key;
    ```

    2.  拿到 `key` 值后去 `this.cache` 对象中去寻找是否有该值，
        如果有则表示该组件有缓存，即命中缓存，如下：

    ```js
    /* 如果命中缓存，则直接从缓存中拿 vnode 的组件实例 */
    if (cache[key]) {
      vnode.componentInstance = cache[key].componentInstance;
      /* 调整该组件key的顺序，将其从原来的地方删掉并重新放在最后一个 */
      remove(keys, key);
      keys.push(key);
    }
    ```

    直接从缓存中拿 `vnode` 的组件实例，此时重新调整该组件 key 的顺序，将其从原来的地方删掉并重新放在 `this.keys` 中最后一个

    `this.cache` 对象中没有该 `key` 值的情况，如下：

    ```js
    /* 如果没有命中缓存，则将其设置进缓存 */
    else {
        cache[key] = vnode
        keys.push(key)
        /* 如果配置了max并且缓存的长度超过了this.max，则从缓存中删除第一个 */
        if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
    }
    ```

    表明该组件还没有被缓存过，则以该组件的 `key` 为键，组件 `vnode` 为值，将其存入 `this.cache` 中，并且把 `key` 存入 `this.keys` 中<br>

    此时再判断 `this.keys` 中缓存组件的数量是否超过了设置的最大缓存数量值 `this.max`，如果超过了，则把第一个缓存组件删掉

## 组件缓存之后如何获取数据

解决方案可以有以下两种：

1.  `beforeRouteEnter`：组件内路由组件前置钩子
2.  `actived`: 被缓存组件激活后执行的生命周期钩子
