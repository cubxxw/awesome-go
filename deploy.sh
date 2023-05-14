#!/usr/bin/env sh
###
 # @Description: 
 # @Author: xiongxinwei 3293172751nss@gmail.com
 # @Date: 2022-09-19 20:54:39
 # @LastEditTime: 2022-09-19 20:59:02
 # @FilePath: \undefinedd:\文档\最近的\docker\deploy.sh
 # @blog: https://nsddd.top
### 
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件 , yarn docs:build
rm -rf ../blog/dist/*

npm run docs:build
# 将build生成的dist目录拷贝至上一层目录中
# cp -rf dist ../blog/

# 进入生成的文件夹
cd ../blog/dist

# git初始化，每次初始化不影响推送
git init
git remote add origin https://github.com/cubxxw/awesome-cloud-native
git branch blog
git switch blog
git add -A
git commit -m 'sh push docker'

# 如果你想要部署到 https://USERNAME.github.io  -- F强制push
git push origin --force blog