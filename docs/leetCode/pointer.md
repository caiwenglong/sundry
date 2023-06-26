---
theme: channing-cyan
highlight: a11y-dark
---

# 指针算法题

## 找出连续出现最多的字符
```js
// 算出下面字符串中连续出现最多的字符  'aaabbbcccccddddd'
    const str = 'abbbbbbbbbdddddccccccccccc';
    let i = 0, // 定义两个指针
        j = 0,
        maxRepeatChar = '',
        maxRepeatCount = 0;
    while (i < str.length - 1) { // 指针i小于字符串长度的时候就执行

        if( str[i] !== str[j]) { // 当两个指针指向的字符不相等时
            if(maxRepeatCount < j - i) { // 判断一下这两个指针之间的长度是否大于之前最大的长度
                // 如果大于之前最大的长度就重新给最大值赋值
                maxRepeatChar = str[i];
                maxRepeatCount = j - i;
            }
            // 赋值完成后将指针i移动到j的位置，指针j继续向后移动
            i = j;
        }

        j++ // 如果两个指针指向的字符相等，那么指针j就继续向后面移动
    }
    console.log(maxRepeatChar + ':' + maxRepeatCount)

```