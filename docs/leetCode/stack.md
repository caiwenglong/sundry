# 栈

## 重复字符串
```js
    // 要求：给出字符串 2[3[a]4[1[b]2[c]]] 输出： aaabccbccbccbccaaabccbccbccbcc
    function smartRepeat(target) {
        // 一个指针
        let index = 0;
        // 数字栈
        const numberStack = []
        // 字符串栈
        const strStack = []

        // 剩余的字符串
        let restStr = ''

        while (index < target.length - 1) {

            // 截取剩余的字符串
            restStr = target.substring(index)

            if(/^\d+\[/.test(restStr)) {
                // 1：如果是以数字开头+[ 开头 那么就向数字栈添加这个数字，向字符栈添加一个空字符
                let number = Number(restStr.match(/(\d+)\[/)[1])
                // 向数字栈添加数字
                numberStack.push(number)
                // 向字符串栈添加空字符
                strStack.push('')
                // 指针向后移动数字的位数 + [ 的位数
                index += number.toString().length + 1

            } else if(/^\w+\]/.test(restStr)) {
                // 2：如果是以字符串+ ']' 结尾，那么就将该字符串添加到字符栈的栈顶
                strStack[strStack.length - 1] = restStr.match(/(\w+)\]/)[1]
                // 指针后移该字符串的长度
                index += restStr.match(/(\w+)\]/)[1].length
            } else if (restStr[0] === ']') {
                // 3：如果指针指向的是 ']' 那么将数字栈和字符栈各出栈一个项，
                // 然后将字符栈出栈的字符串重复数字栈出栈的次数，然后将生成的字符串添加到字符栈的栈顶
                // 数字栈出栈一项
                const popCount = numberStack.pop()
                // 字符串出栈一项
                const popStr = strStack.pop()
                // 将字符栈出栈的项重复数字栈出栈的项的次数
                const repeatStr = popStr.repeat(popCount);
                // 将生成的字符串添加到字符串的最后一项
                strStack[strStack.length-1] += repeatStr
                // 指针后移一位
                index++
            }

        }
        // 最后字符栈和数字栈就都只剩剩一个项了，将字符栈的项重复数字栈的次数就是所得的结果
        return strStack[0].repeat(numberStack[0])
    }

    console.log(smartRepeat('2[3[a]4[1[b]2[c]]]'))
```