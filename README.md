# weixin-app
wxApp

>
本地切换分支报错解决方法： 

git切换分支error: pathspec 'demo2' did not match any file(s) known to git.
    
新建了分支：demo2,但是本地 git checkout demo2就报个错误，
    
解决方法：
        1、执行命令git fetch取回所有分支的更新

        2、执行git branch demo2可以看到demo2分支（已经更新分支信息）

        3、切换分支git checkout demo2
