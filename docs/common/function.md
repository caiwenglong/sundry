# 一些面试题

### 并发请求

```js
/**
 *  实现一个并发请求函数concurrencyRequest(urls, maxNum)，要求如下：
    • 要求最大并发数 maxNum
    • 每当有一个请求返回，就留下一个空位，可以增加新的请求
    • 所有请求完成后，结果按照 urls 里面的顺序依次打出（发送请求的函数可以直接使用fetch即可）
  **/
 const handleLimitRequire = (urls, maxNum) => {
  return new Promise((resolve, reject) => {
      if(urls.length === 0) {
          resolve ([])
          return 
      }
      const results = []
      let index = 0;
      let count = 0;

      async function request() {
          if(index === urls.length) {
              return 
          }
          const i = index; // 保存序号，使result和urls相对应
          const url = urls[index];
          index++;
          console.log(url)
          try {
              results[i] = await fetch(url)
          } catch(err) {
              results[i] = err
          } finally {
              count ++ 
              if(count === urls.length) {
                  resolve(results)
              }
              request();
          }
      }
      const times = Math.min(urls.length, maxNum) // 得到次数
      for(let i = 0; i < times; i++) {
          request();
      }
  })
}
```