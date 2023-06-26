---
theme: channing-cyan
highlight: a11y-dark
---

# leetCode 的数组算法题

## 两数之和
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if(map.has(complement)) {
            return [map.get(complement), i]
        } else {
            map.set(nums[i], i)
        }
    }
    return []
}
```

## 三数之和
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    const result = []
    nums = nums.sort((a, b) => a - b) // 给数组排序
    if (!nums || nums.length < 3) return result // 如果数组长度小于3 则直接返回

    for (let i = 0; i < nums.length; i++) {

        // 如果是最小的一个数大于0 那么接下来的数相加肯定大于0
        if (nums[i] > 0) return result

        // 如果nums[i] === nums[i+1] 则继续
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let L = i + 1
        let R = nums.length - 1
        // [-1, -1, 0, 1, 2, 4]
        while (L < R) {
            if (nums[i] + nums[L] + nums[R] < 0) {
                L++
            } else if (nums[i] + nums[L] + nums[R] > 0) {
                R--
            } else {
                result.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] === nums[L + 1]) L++; // 去重
                while (L < R && nums[R] === nums[R - 1]) R--; // 去重
                L++
                R--
            }
        }
    }
    return result;
};

```

## 找到数组里面和为 0 的三个项, 且得出的结果不能有重复项
```js
/**
 * （ 3sun ）三数之和：找到数组里面和为0的 三个项，且得出的结果不能有重复项
 * 例如： [-4, -1, 2, 0, 1, -1]，结果：[ [ -1, 2, -1 ], [ -1, 0, -1 ] ]
 *      不能是[ [ -1, 2, -1 ], [ -1, 0, -1 ]， [ -1, -1, 0] ]
 * 解决思路：1、首先对数组进行从小到大排序（因为从小排序之后，往后三项的和会逐渐递增，这时就可以通过判断是否大于0 来找零界点）
 *          2、遍历数组，从0到arr.length - 2为止
 *              为啥是 length-2呢？
 *          3、如果当前的数字等于前面一个数字，那么就跳过。（因为要去重）
 *          4、如果不同，那么就定义一个start指针指向该项的后一项（也就是 start = i + 1），
 *                      定义一个end指针指向数组的最后一项(也就是 end = length - 1).
 *                      这时就可以将这三个指针所指的项进行相加，这时候有三种情况：
 *                          1⃣️：这三项和为0，那么这三项就是我们需要的，将它push到target数组里面（target.push([arr[i], arr[start], arr[end]])）
 *                          2⃣️：这三项和小于0，那么start 指针就 ++， 让三项的和增大
 *                          3⃣️：这三项的和大于0，那么 end 指针就 --， 让三项的和减小
 */
function getThreeSun(numArr) {

    // 1、首先对数组进行从小到大排序
    numArr.sort((a, b) => {
        return a - b
    })

    const targetArr = []

    // 2、遍历数组，到i < numArr.length - 2 为止, 因为如果不到 -2 为止，那么start 跟 end 的指针会是指向最后一项，没有意义
    for (let i = 0; i < numArr.length - 2; i++) {

        // 如果后面一个数等于前面一个数，那么就跳过，不做处理，如果不等于，那么就有三种情况
        if (i === 0 || numArr[i] !== numArr[i -1]) {
            // 定义 start 跟 end 两个指针
            let start = i + 1
            let end = numArr.length - 1
            while (start < end) {

                // 1、三项之和等于 0 的情况
                const sum = numArr[i] + numArr[start] + numArr[end]
                if (sum === 0) {
                    targetArr.push([numArr[i], numArr[start], numArr[end]])
                    start++
                    end--

                    if(numArr[start] === numArr[start - 1]) {
                        start ++
                    }

                    if(numArr[end] === numArr[end + 1]) {
                        end --
                    }

                } else if (sum < 0) {
                    // 如果小于 0 的情况
                    start++
                } else {
                    // 大于 0 的情况
                    end--
                }
            }
        }
    }
    return targetArr
}
console.log(getThreeSun([-4, -1, 2, 0, 1, -1, -1, 2, 1]))
```

## 和给定数字最接近是三数之和
> 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    // 升序排序
    nums.sort((a, b) => a - b);
    // 初始化一个最小值
    let min = Infinity;
    const len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        // 定义左右指针
        let left = i + 1
        let right = len - 1;
        while (left < right) {
            // 当前三数之和
            const sum = nums[i] + nums[left] + nums[right];
            // 如果当前和更接近，更新最小值
            if (Math.abs(sum - target) < Math.abs(min - target)) {
                min = sum;
            }
            // 根据sum和target的关系，移动指针
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // sum和target相等，直接返回sum，肯定是最小的了
                return sum;
            }
        }
    }
    // 遍历结束，返回最接近的和
    return min;
};
```

## 相同字符串归组
> 给定一个数组，数组的项是字符串，如果字符串中的字符出现的次数是一样的，那么就将这些项归为一组
> 例如：[ 'tea', 'coffee', 'eat', 'ate', 'tan', 'nat']
> 返回：[ ['tea', eat, 'ate'], ['coffee'], ['tan, nat'] ]

```js
/**
    * 思路：1、判断是否是空数组
    *      2、对每一个字符串都创建一个长度为26(对应26个字母)，每一项初始值都为 0 的数组
    *      3、遍历每一项字符串，将对应字符出现的次数填充到数组对应的位置
    *          比如：tea，出现a的次数为1， 那么数组就变成了[ 1, 0, 0, 0, 1, ... 1, 0, 0 ... ]
    *      4、遍历数组，按照字母出现的频率进行分组归类
    *      5、遍历数组，将结果返回
 */
function getTargetArr(arr) {

    // 1、判断数组是否为空
    if(arr.length <= 0) {
        return []
    }

    const map = new Map()

    // 遍历数组
    for(const str of arr) {
        // 为数组的每一项都创建一个长度为26都数组, 并且每一项都填充为 0
        const emptyArr = Array(26).fill(0)

        // 遍历每一个字符串，得到字符串里面的字符，并标记出现的次数
        for (let i = 0; i < str.length; i++) {
            // 将字符转换为ascii码， 比如 a 对应都就是 97， b对应都就是98，以此类推
            const index = str.charCodeAt(i) - 97;
            // 每出现一次，那么数组对应的值就 + 1
            emptyArr[index] ++
        }

        // 将数组转换成 字符串当作 map的key，因为如果字符串的字符都一样的话，那么[0,0,0, ...]转换成的字符串就会是一样的
        const key = emptyArr.join("");

        // 判断 map中是否有对应的key值， 如果有对应的key值，那么将字符串push进去，如果没有那么就给这个key 赋值
        if(map.has(key)) {
            map.get(key).push(str)
        } else {
            map.set(key, [str])
        }

    }
    // 生成的map结构如下所示
    // {"10001000000000000001000000" ： Array(3), "00102200000000100000000000" ： Array(1), "10000000000001000001000000" ： Array(2)}
    console.log(map)

    const resultArr = []

    // 对map进行遍历得到里面的值
    map.forEach((value) => {
        resultArr.push(value)
    })

    return resultArr
}
console.log(getTargetArr(['tea', 'coffee', 'eat', 'ate', 'tan', 'nat']));
```

## 长度最小数组
```js
/**
 * 给定一个含有n个正整数的数组和一个正整数 target 。
    找出该数组中满足其和 ≥ target 的长度最小的 连续子数组：[numsl, numsl+1, ..., numsr-1, numsr] ，
    并返回其长度。如果不存在符合条件的子数组，返回 0 。

    输入：target = 7, nums = [2,3,1,2,4,3]
    输出：2
    解释：子数组 [4,3] 是该条件下的长度最小的子数组。

    输入：target = 4, nums = [1,4,4]
    输出：1

    输入：target = 11, nums = [1,1,1,1,1,1,1,1]
    输出：0
 */
/**
 * @description: 
 * @param {*} target
 * @param {*} nums
 * @return {*}
 * 解法：1、找出第一个满足的子数组
 *      2、如果选出的数组和大于 target  那么就将找出的数组第一项踢出
 */
const minSubArrayLen = function (target, nums) {
    // 注：因为这个是要求连续最小数组， 故不能打乱原来的数组也不能对数组进行排序
    let i = 0 // 指针 1
    let j = 0 // 指针 2
    // 这边length为啥要这样设置？ 因为要找出最小子数组的长度，故不能设置为0, 只能按照做大的值来设置
    // 如果到最后length 的值大于 num.length   那么就说明没有最小子数组， 故返回0
    let length = nums.length + 1 
    sum = 0
    result = 0

    while(j < nums.length) {
    sum += nums[j]
    while(sum >= target) {
        sum -= nums[i]
        length = length > j - i + 1 ? j - i + 1 : length
        i ++
    }
    j ++
    }
    result = length > nums.length  ? 0 : length
    return result 

};
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));
```

# 最大子序和
```js
/**
 * 题目：给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 例如：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 算法思路：判断一下是否要舍弃前面的项，新开一个数组，判断的依据就是 前面所有的项加起来 再加上当前项是否大于当前项
 *          如果大于当前项，那么就将当前项添加到原来项的后面，如果小于当前项，那么就新开一个数组，以当前项为第一项
 *          比如：遍历到第一项的时候， 1 + -2 < 1, 那么就新开一个数组 从1 开始 [1
 *              遍历到第二项的时候 1 + -3 > -3, 那么就讲这一项添加到原来的数组后面，[ 1, -3
 *              遍历到第三项的时候 1 + -3 + 4 < 4, 那么就新开一个数组得到 [ 4
 *              遍历到第四项的时候 4 + -1 > -1  --> [ 4, -1]
 *              第五项 4 + -1 + 2 > 2 --- > [4, -1, 2
 *              第六项 4 + -1 + 2 + 1 > 1 --- [4, -1, 2, 1
 *              第七项 4 + -1 + 2 + 1 + -5 > -5 --- [4, -1, 2, 1
 */
const maxSubArray = function(nums) {

    // 1、首先判断边界情况
    if(nums.length === 1) {
        return nums[0]
    }

    // 定义一个数组，用来存储前面项的和
    // 比如：当遍历到第一个数的时候，最大的和就 -2，第二项的时候最大值就是1，第三项的时候就是-2
    const sunArr = []

    sunArr[0] = nums[0]
    let maxValue = sunArr[0]
    // 循环遍历每一个项
    for (let i = 1; i < nums.length; i++) {

        // 获得前面几项的最大值，存入sunArr
        sunArr[i] = Math.max(sunArr[i-1] + nums[i], nums[i])

        // 得到最大值
        maxValue = Math.max(sunArr[i-1] + nums[i], maxValue)

    }

    console.log(sunArr)
    return maxValue
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
```

## 最长递增子序列

```js
/**
    例如：给一个数组[ 3, 2, 8, 9, 5, 6, 7, 11, 15, 4]

        - 如果下面遇到的值比数组里面 最后一项 的值大，那么直接放数组后面
        - 如果遇到的值比数组里面 最后一项 的值还小，
            那么就需要通过二分查找找到比当前值大的值，然后替换掉

        - 最后我们可以通过标记索引的方式，通过目标数组最后一项将结果还原

    1、首先 第一个数不用比 直接放进来 [ 3 ]
    2、接着往下走，2 比 3 小 那么就将3 替换掉 [ 2 ]
    3、接着往下走，8 比 2 大，那么将 8 添加到数组最后一项 【 2 ，8 】
    4、接着往下走，9 比 8 大，那么将 9 添加到数组最后一项 【 2 , 8 , 9 】
    5、接着往下走，5 比 8 小，那么将 8 替换成 5 【 2 , 5 , 9 】
    6、接着往下走，6 比 9 小，那么将 9 替换成 6 【 2 , 5 , 6 】
    7、接着往下走，7 比 数组里面的值都大，那么将 7 添加到数组最后一项【 2 , 5 , 6 ，7 】
    8、接着往下走，11 比 数组里面的值都大，那么将 11 添加到数组最后一项【 2 , 5 , 6 ，7 ，11 】
    9、接着往下走，15 比 数组里面的值都大，那么将 15 添加到数组最后一项【 2 , 5 , 6 ，7 ，11， 15 】
    9、接着往下走，4 比 5 小，那么将 5 替换成4【 2 , 4 , 6 ，7 ，11， 15 】
    
 */

    const targetArr = [ 3, 2, 8, 9, 5, 6, 7, 11, 15, 4]
    function getSequence(arr) {
        
        const length = arr.length
        const result = [] // 这个数组放的是索引值

        // 标记索引数组，用来还原正确的值的顺序
        const indexArr = new Array(length).fill(0) 
        
        let currentValue // 当前值
        let resultLastValue // 索引数组最后一项的值对应的数值

        let resultStart
        let resultEnd
        let middle

        for(let i = 0; i < length; i++ ) {
            currentValue = arr[i] // 当前值
            if(i === 0) {
                // 如果是数组的第一个数，则直接放入目标数组
                result.push(i)
            } else {
                resultLastIndex = result[result.length - 1]; // 目标索引数组的最后一项
                resultLastValue = arr[resultLastIndex]
                // 如果当前值比目标数组最后一个值还大，那么就直接添加到目标数组里
                if(currentValue > resultLastValue) {
                    result.push(i)
                    
                    // 记住前面一项的索引【
                    indexArr[i] = resultLastIndex
                }

                // 如果当前值比目标数组最后一项的值还小，
                // 那么就需要通过二分查找找出第一个比当前值大的值，然后替换掉
                // 递增序列，采用二分查找是最快的查找方式
                // 二分查找就是将数组一分为二，从数组中间开始找
                if(currentValue < resultLastValue) {
                    resultStart = 0
                    resultEnd = result.length - 1
                    
                    while(resultStart < resultEnd) { // start === end的时候就停止查找了
                        middle = ((resultStart + resultEnd) / 2) | 0 // 取整

                        if(arr[result[middle]] < currentValue) {
                            resultStart = middle + 1
                        } else {
                            resultEnd = middle
                        }
                    }

                    // 找到中间值后，需要做替换，这时 start跟end的值时一样的
                    // 这边就是贪心算法，永远将比较小的值放到数组里面
                    if(arr[result[resultEnd]] > currentValue) { 
                        result[resultEnd] = i
                        // 记住前面一项的索引
                        indexArr[i] = result[resultEnd - 1]
                    }
                }
            }
        }

        // 得到标记索引数组之后就可以通过result的最后一项来进行追溯
        let resultLength = result.length
        let last = result[resultLength - 1] // 找到最后一项
        // 从result数组最后一项开始（因为最后一项肯定是最大值），从最后一项往前循环
        while(resultLength-- > 0) { //  倒叙追溯
            result[resultLength] = last
            last = indexArr[last]
        }
        

        return result
    }

    console.log(getSequence(targetArr))
```