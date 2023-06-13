# vitepress 部署到 github page 流程

### 1、 添加部署文件 deploy.yml
- 在项目中创建 .github/workflows文件夹，在文件夹底下创建一个 deploy.xml，该文件内容如下：
```yaml
name: Deploy

on:
  push:
    branches:
      - master  # 修改内容的分支

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm i pnpm -g
      - run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist

```

### 2. 在自己的github中，生成tokens
1. 点击头像，选择 Settings 
![Settings](/github/github-page-1.png "Settings")
2. 选择 Developer settings
![Developer settings](/github/github-page-2.png "Developer settings")
3. 选择 Personal access tokens -> Tokens (classic)
![Tokens](/github/github-page-3.png "Tokens")
4. 点击 Generate new token 选择 Generate new token (classic) 生成tokens
![Generate](/github/github-page-4.png "Generate")
      
### 3. 在要部署的项目中，做以下设置
1. 点击setting 选择 action -> general，然后选择  Read and write permissions
![img](/github/github-page-5.png "img")
![img](/github/github-page-6.png "img")

::: tip
创建完上面文件之后，直接提交到仓库即可
:::