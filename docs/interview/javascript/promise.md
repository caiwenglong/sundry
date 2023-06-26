# promise实现

```js
const STATE_PENDING = 'pending'
const STATE_FULFILLED = 'fulfilled'
const STATE_REJECTED = 'rejected'
/* 
    promise 的特点：
    1、他是一个构造函数，每个new出来的promise都有自己的状态和值，
        且状态初始值为 pending， 值为undefined
    2、创建实例是时候需要传入一个函数，而这个函数可以接受两个函数作为参数
        这两个函数分别是resolve(data) 和 reject(error)
    3、promise的状态有三种：fulfilled　pending　rejected
        而且状态是pending的时候才能改变，
        要么从pending --> fulfilled
        要么从pending --> rejected
    3、根据promise的结构，我们可以发现then(), catch()方法在它的原型上
*/
function MyPromise(fn) {

    this.promiseState = STATE_PENDING // 每个实列的初始状态都是pending
    this.promiseResult = undefined // 每个实例的初始值都是 undefined

    const self = this // 保存实例对象的this值

    this.callbacks = []; // 用来保存 then 还未执行的 参数方法

    /**
     * @params data 就是返回的结果值
     * resolve 会将promise的状态从pending 变为 fulfilled
     */
    function resolve(data) {
        // 如果不使用self，这里内部的this会指向window
        // promise状态是pending的时候才能被改变
        if (self.promiseState !== STATE_PENDING) {
            return
        }

        self.promiseState = STATE_FULFILLED // 将promise的状态改为 fulfilled
        self.promiseResult = data // 将promise的值改为 data

        //调用成功的回调函数
        self.callbacks.forEach((item) => {
            item.onResolved(data);
        });

    }

    function reject(error) {
        // 如果不使用self，这里内部的this会指向window
        // promise状态是pending的时候才能被改变
        if (self.promiseState !== STATE_PENDING) {
            return;
        }
        self.promiseState = STATE_REJECTED; // 将promise的状态改为 rejected
        self.promiseResult = error; // 将promise的值改为 error

        //执行失败的回调
        self.callbacks.forEach((item) => {
            item.onRejected(error);
        });

    }

    // 调用一下传入的参数方法
    // fn(resolve, reject);

    // 如果throw 异常，就需要捕获到异常然后更改状态
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }

}

// 每个promise都能调用then方法
// then 的特点就是可以无限链接的调用。
// 第一个参数会在promise执行 resolve 的时候调用，
// 第二个参数会在promise执行 reject 的时候调用
// 如.then(resolve => {}, reject => {}).then(resolve => {}, reject => {}).then...
// 这说明 then 方法需要返回一个 promise 这样才能进行无限调用
// 而决定then执行的是 resolve方法 还 reject 方法取决于上一次的 promise 返回的状态，
// 如果是 fulfilled 状态，那么就执行第一次参数的方法 就是 resolve，相反则执行 reject 方法
MyPromise.prototype.then = function (thenCallback, catchCallback) {
    const self = this;

    return new MyPromise((resolve, reject) => {

        // 如果传入的不是一个函数，我们就将它变成一个函数,并且获取的是上一个.then返回的promise实例的值。
        if (typeof catchCallback !== "function") {
            catchCallback = (reason) => {
                throw reason;
            };
        }
        if (typeof thenCallback !== "function") {
            thenCallback = (value) => value;
        }
        function run(type) {
            try {
                // 获取回调函数的执行结果
                let result = type(self.promiseResult);
                // 判断
                if (result instanceof MyPromise) {
                    // 如果是 Promise 类型的对象
                    result.then(
                        (v) => {
                            resolve(v);
                        },
                        (j) => {
                            reject(j);
                        }
                    );
                } else {
                    // 结果的对象状态为『成功』
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }

        }


        // 如果上一次返回的状态是 fulfilled ，那就执行第一个参数的方法， 并将上一次的promise result 结果传给要执行的这个方法
        if (this.promiseState === STATE_FULFILLED) {
            run(thenCallback)
        }

        // 如果上一次返回的状态是 rejected ，那就执行第二个参数的方法， 并将上一次的promise result 结果传给要执行的这个方法
        if (this.promiseState === STATE_REJECTED) {
            run(catchCallback)
        }

        // 如果是 pending 状态，那么就说明之前的promise，可能是被设置了延迟加载，还没有执行 resolve或者 reject 方法
        // 之前的promise 没有执行 resolve 或者 reject方法，就不能确定 then 要执行哪个 参数方法
        // 因此 需要将 then 的参数方法先 保存起来，等到 promise 的resolve 或者 reject 方法调用的时候在依次进行执行
        if (this.promiseState === STATE_PENDING) {
            // 保存 then 方法的回调函数
            this.callbacks.push({
                onResolved: function () {
                    run(thenCallback);
                },
                onRejected: function () {
                    run(catchCallback);
                },
            });
        }
    })
}

// 每个promise都能调用catch方法
// 但是我们知道，catch其实就是.then执行第二个参数的一个语法糖。 因此，我们就可以将接收到的回调函数直接给.then的第二个参数。
MyPromise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
}

// 添加 resolve 方法
MyPromise.resolve = function (value) {
    // 返回promise对象
    return new MyPromise((resolve, reject) => {
        if (value instanceof MyPromise) {
            value.then(v => {
                resolve(v);
            }, r => {
                reject(r);
            })
        } else {
            // 状态设置为成功
            resolve(value);
        }
    });
}

// 添加 reject 方法
MyPromise.reject = function (error) {
    return new MyPromise((resolve, reject) => {
        reject(error);
    });
}

MyPromise.all = function (promiseLists) {
    return new MyPromise((resolve, reject) => {
        let promiseResults = []
        let count = 0
        for (let i = 0; i < promiseLists.length; i++) {
            if (!(promiseLists[i] instanceof MyPromise)) {
                promiseLists[i] = MyPromise.resolve(promiseLists[i])
            }
            promiseLists[i].then(v => {
                count += 1
                promiseResults[i] = v
                if (count === promiseLists.length) {
                    resolve(promiseResults)
                }
            }, e => {
                reject(err)
            })
        }
    })
}
const promise1 = MyPromise.resolve(3);
const promise2 = 42;
const promise3 = new MyPromise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

MyPromise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
```