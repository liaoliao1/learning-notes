## 1.Git底层命令
1.1 git对象记录每一次改动(文件)，不能代表一个版本(项目)
```
git init
echo "test" > test.txt
git hash-object -w  --stdin			从控制台写入数据库
git hash-object -w  ./路径			写入数据库
git cat-file -p  hash值				查看原始写入内容
git cat-file -t  hash值				查看对象类型
git中没有保存文件名，只保存了内容，操作不涉及暂存区
```
1.2 树对象
```
创建加入暂存区
git update-index--add--cacheinfo 100644   hash值 test.txt  
查看暂存区
git ls-files -s
生成树对象
git write-tree
创建提交对象
echo "first commit" | git commit-tree  树hash值
echo "second commit" | git commit-tree  hash值(第二次)  -p hash值(第一次)
```
## 2.高层命令
```
创建工作目录，修改工作目录
git init 
git add  ./	（将修改添加到暂存区）
git hash-object -w  ./路径  (修改多少个就要执行多少次)
git update-index...
git commit  -m "注释内容"（将暂存区提交到版本库）
git write-tree
git commit-tree

git status 	   	检查当前文件状态
git diff			查看哪些修改没有暂存
git diff --staged 	查看哪些被暂存了，还没提交

git mv filename1  filename2   文件改名，从name1到name2，再添加到暂存区
git log  --oneline 	查看提交记录
git rm  文件名		删除文件并将修改添加到暂存区
```
## 3.分支操作
```
分支：指向最新对象的指针
git branch 				显示当前分支
git branch 分支名		创建分支
git checkout 分支名		切换分支
git branch -d/D name	删除分支
git branch -v			查看每一个分支的最后一次提交
git branch name commitHash	新建一个分支并使分支指向对应的提交对象
```
## 4.分支实战
```
切换分支时，要保证当前分支干净，否则可能污染其它分支
快进合并		
	git merge
撤回在工作目录中的修改
	git checkout --filename
撤回自己的暂存
	git reset HEAD filename
撤回自己的提交
	git commit --amend 修改注释再一次提交
第一部
	撤销上一次git commit的命令
	git reset --soft HEAD~	（带着分支一起移动）
第二部
	git reset --mixed HEAD~
	带着分支一起移动、动了暂存区
第三部
	git reset --hard HEAD~
	动HEAD，带着分支一起移动、动了暂存区、动了工作目录，危险
	git checkout --filename
	只动HEAD，对工作目录是安全的

git reset --hard hash值(通过git log找到)
git reset --hard origin/master   回到github版本
```
## 5.团队协作
```
1.项目经理初始化远程仓库
	初始化一个空的仓库，在github上操作
2.项目经理创建本地仓库
	git init 		
	将源码复制进来
	git remote add  别名 仓库地址
	修改用户名，修改邮箱
	git add
	git commit
3.项目经理推送本地仓库到远程仓库
	清理windows凭据
	git push 别名 分支 （输入用户名密码，推完之后会附带生成远程跟踪分支）
4.项目邀请成员，成员接受邀请
	在github上操作
5.成员克隆远程仓库
	git clone 仓库地址(在本地生成.git 文件，默认为远程仓库配别名origin，默认主分支有对应的远程跟踪分支)
	只有在克隆的时候，本地分支和远程跟踪分支有同步关系
6.成员做出贡献
	修改源码文件
	git add
	git commit 
	git push 别名 分支（输入用户名密码）
7.项目经理更新修改
	git fetch 别名 (将修改同步到远程跟踪分支上)
	git merge 远程跟踪分支
```
![](https://ftp.bmp.ovh/imgs/2020/08/934bbbadba277ae3.png)
## 6.远程跟踪
```
远程分支、远程跟踪分支、本地分支
跟踪远程分支
	git branch -u 远程分支
正常的数据推送和拉取步骤
	1.确保本地分支已经跟踪了远程跟踪分支
	2.拉取数据	git pull
	3.上传数据	git push
一个本地分支怎么去跟踪一个远程跟踪分支
	1.当克隆的时候，会自动生成master本地分支，已经跟踪远程跟踪分支
	2.新建其他分支时，可以指定要跟踪的远程跟踪分支
	git checkout -b 本地分支名 远程跟踪分支名
	git checkout --track 远程跟踪分支名
	3.将一个已经存在的本地分支 跟踪远程跟踪分支
	git branch -u 远程跟踪分支名
```
## 7.冲突
```
git本地操作有冲突
	典型合并的时候
	git merge feature  合并feature分支与主分支master(在master上)
git远程协作的时候有冲突
	push
	pull
	删除远程分支
git commit  -am  "message"  解决冲突后提交所有已更改的文件
```
![](https://ftp.bmp.ovh/imgs/2020/08/98af91a38921ad89.jpg)


## linux基础命令
![](https://ftp.bmp.ovh/imgs/2020/08/f127fd346d59d45e.jpg)

# 2. git基础
SVN 集中式版本控制系统  有一个单一集中管理的服务器

Git 分布式版本控制系统  每个人的电脑上都是一个完整的版本库

```
git init 创建本地版本库
git add 添加到缓存区
git commit 提交到本地仓库
git stash 放入暂存区，暂时不想提交的修改
git checkout -f 撤销丢弃本地修改
git rm –cached 撤销添加到缓存区的修改
git reset bb0b350xxx 回滚到hashId的状态
	--soft HEAD 回到上一次文件改变之后，未commit的状态
	--hard HEAD 回到上一次文件没改之前的状态
git tag v1 给本次提交贴标签v1
git status 查看当前状态
git log 查看提交记录
```
```
git分支只是一个包含所指对象校验和的文件，创建分支本质上是向一个文件写入41个字节。
git branch test 创建test分支
git checkout test 切换到test分支
git merge test 合并test分支
git branch -d test 删除test分支
git branch -d -r <branchname> //删除远程分支，删除后还需推送到服务器
git push origin:<branchname>  //删除后推送至服务器
```
```
git clone 克隆仓库到本地文件夹
git remote -v 获取远程仓库信息
git remote update origin 更新远程仓库变更 拉取所有分支变更
git fetch <远程主机名><远程分支名>:<本地分支名>
git pull = git fetch + git merge origin/develop
git push <远程主机名><本地分支名>:<远程分支名>

git add – git commit – git pull – 解决冲突 – git push
```








