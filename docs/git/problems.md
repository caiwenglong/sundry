# 遇到的问题

### 1、某个文件rollback后还是显示修改状态，在更新的时候会显示冲突，这时候可以用如下方式进行处理：

1. 把远端的代码拉倒本地，并把指针放到FETCH_HEAD中
```js
git fetch origin master 
```

2. 把本地的代码指针切换到刚刚拉下来的那个指针上；
```js
git reset --hard FETCH_HEAD
```


3. 把本地的代码推送到远端，其实即使不推送也没问题，因为本地代码跟远端已经一致了；
```js
git push origin master
```


4. 再次查看发现那些文件的差异已经没有了
```js
git status
```

5. 后面可以继续执行其他操作了