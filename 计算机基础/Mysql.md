# Mysql
## 2020.11.10
## sql语句分类
+ DQL（数据查询语言）：查询语句，select
+ DML（数据操作语言）：insert、delete、update，对数据进行增删改
+ DDL（数据定义语言）：create、drop、alter，对表结构的增删改
+ TCL（事务控制语言）：commit提交事务，rollback回滚事务（T是transaction）
+ DCL（数据控制语言）：grant授权、revoke撤销权限

## mysql命令
```
show databases;
create databases xxx;
use xxx;
show tables;
//初始化数据
source xxx.sql   sql脚本
drop database xxx;
```
```
//查看表结构
desc 表名;
//结束语句
\c 
//查看创建表的语句
show create table 表名;
```
## 条件查询
```
between and  在两个值之间，左小右大
in 等同于or
not in  不在这几个值中
is null  是空
like 模糊查询，%代表任意多个字符，_代表任意1个字符
select name from emp where name like '%\_%'; 含有_的名字
```
## 数据排序
```
按照工资升序找到名字和薪资
select name,sal from emp order by sal; 默认升序
select name,sal from emp order by sal asc; 升序
select name,sal from emp order by sal desc; 降序
先按照工资降序，相同工资按名字升序
select name,sal from emp order by sal desc, name asc;
```
## 分组函数
分组函数是对一组数据进行操作，自动忽略null
分组函数不能直接在where中使用
```
count 计数
sum 求和
avg 平均值
max 最大值
min 最小值
select sum(sal) from emp;
```
```
有null参与的运算结果一定是null
空处理函数ifnull( )
select ename,ifnull(sal,0) form emp;
```
## 分组查询
```
group by 按照某个字段进行分组
having 对分组后的数据再次过滤

//每个工作岗位的最高薪资
select max(sal) from emp group by job;
select后只能是 分组字段和分组函数
//每个部门不同工作岗位的最高薪资(多个字段)
select deptno,job,max(sal) from emp group by job,deptno;

//每个部门的平均薪资，薪资大于2500的数据
select deptno,avg(sal) from emp group by deptno having avg(sal)>2500;
```
去除重复记录distinct
```
select distinct job from emp;
```
## DQL执行顺序
select ...		5
from ...	      1
where ...	      2
group by...         3
having ...            4
order by ...         6

## 连接查询
分类：
+ 内连接	查询A、B表能匹配的记录
	+ 等值连接  连接条件为等量关系
	+ 非等值连接   连接条件为非等量关系
	+ 自连接		一张表看作两张表，自己连接自己
+ 外连接	有一张主表、一张副表，主要查主表，副表匹配不上用null匹配
	+ 左外连接
	+ 右外连接
+ 全连接

起别名，执行效率高，可读性好
```
//SQL92,以后不用
select e.ename,d.dname from emp e,dept d where e.deptno=d.deptno;
//SQL99,常用
select e.name,d.dname from emp e (inner) join dept d on e.deptno=d.deptno;
```
```
//查询所有员工的领导(保证a表所有数据都查询出来)
select a.ename,b.ename from emp a left (outer) join emp b on a.mgr=b.empno;
```
```
//三张表连接
//查询每个员工的部门名称、工资等级及上级领导
select e.ename,d.dname,s.grade 
from emp e 
join dept d on e.deptno=d.deptno 
join salgrade on s.sal between s.lowsal and s.hisal
left join emp e1 on e.mgr=e1.empno;
```
## 子查询
select语句中嵌套select语句，可以出现在哪里？
select 
	...(select)
from 
	...(select)
where
	...(select)

## 2020.11.11
## union(将查询结果集相加)
```
//查询工作为salesman和manager的员工
select ename,job from emp where job='salesman'
union
select ename,job from emp where job='manager'
可以对两张没有关系的表相加，查询的列数需要相等
```
## limit(分页查询)
+ limit是mysql特有的
+ limit取结果集中的部分数据
+ limit startIndex length
+ limit是sql语句执行的最后一个环节
```
//去除工资前5名
select ename,sal from emp order by sal desc limit 0,5;
```
## 创建表
```
create table 表名(
	字段名1 数据类型,
	字段名2 数据类型 default 1, //指定默认值
);
//常见数据类型
int		整型
bigint	长整型
float	浮点型
char 	定长字符串
varchar 可变长字符串
date	日期类型
BLOB	二进制大对象
CLOB	字符大对象（存储较大文本，4G）
```
## 插入数据
```
insert into 表名(字段名1,字段名2,...) values(值1,值2,...);
```
## 表的复制
```
//复制emp到emp1
create table emp1 as select * from emp;
//查询结果插入表中
insert into emp1 select * from emp;
```
## 修改数据
```
update 表名 set 字段1=值1,字段2=值2 where 条件;
没有条件整张表全部更新
```
## 删除数据
```
delete from 表名 Where 条件;
没有条件全部删除
//删除大表，不可恢复
truncate table emp;
```
## 约束constraint
添加约束是为了保证数据的合法性、有效性、完整性

常见约束：
+ 非空约束(not null)
+ 唯一约束(unique)：不能重复
+ 主键约束(primary key)：既不能为null，也不能重复
+ 外键约束(foreign key)
+ 检查约束(check) :mysql不支持

```
not null只有列级约束

//唯一约束，给两列添加unique
usercode varchar(255),
username varchar(255),
unique(usercode,username) //多个字段联合约束，表级约束
与
usercode varchar(255) unique,//列级约束
username varchar(255) unique
不同
```
主键的作用：
+ 表的设计范式，第一范式要求每张表都有主键
+ 主键值是记录在表中的唯一标识

主键的分类：
+ 单一主键
+ 复合主键（不建议使用，违背三范式）
+ 自然主键
+ 业务主键（主键值与业务相关，不建议使用）

一张表的主键只能有一个
```
//主键值自增
id int primary key auto_increment, //从1开始自增
```

外键约束 foreign key
```
子表引用父表的字段作为外键，外键约束的字段值只能是父表中的数据
foreign key(classno) references t_class(cno),
```
+ 外键值可以是null
+ 外键引用的父表字段至少是unique的

## 存储引擎
mysql支持很多存储引擎，每个对应不同的存储方式。
常见的存储引擎：
1. MyISAM：
+ 使用三个文件表示一个表，分别为表的格式、数据、索引
+ 不支持事务
+ 可被压缩，节省存储空间
2. InnoDB（mysql默认）
+ 支持事务，行级锁、外键等，安全
+ 表结构存在.frm文件中
+ 表数据存在tablespace中，无法压缩
+ msql数据库崩溃后提供自动恢复
+ 支持级联删除和级联更新
3. Memory
+ 不支持事务
+ 数据容易丢失，因为存于内存中
+ 查询速度最快

## 事务
一个事务是一个完整的业务逻辑单元，不可再分。

+ 和事务相关的语句只有DML（insert delete update）
+ 事务的存在是为了保证数据的完整性、安全性

TCL
提交事务 commit
回滚事务 roolback

事务的四大特性：ACID
+ A：原子性，事务是最小的工作单元
+ C：一致性，事务必须保证多条DML语句同时成功或失败
+ I ： 隔离性，事务A与事务B具有隔离
+ D：持久性，最终数据必须持久化到硬盘文件中，事务才算成功的结束

事务隔离性存在隔离级别，理论上包括4个：
第一级别，读未提交（read uncommitted），对方事务还没有提交，我们当前事务可以读取到对方未提交的数据，存在脏读现象。
第二级别，读已提交（read commmitted），对方事务提交后可以读取到，问题：不可重复读。
第三级别，可重复读（repeatable read），解决了不可重复读问题，问题：读取到的数据是幻象。
第四级别，序列化读，解决所有问题，需要事务排队，效率低。

mysql默认第三级别
mysql默认事务自动提交，执行一条DML语句就提交一次，关闭自动提交：start transaction;

## 索引
索引相当于一本书的目录，通过目录可以快速找到对应的资源。

+ 索引提高检索效率的原理是缩小了扫描的范围
+ 索引不能随意添加，因为索引也需要数据库维护，表中数据经常被修改不适合添加索引

什么时候给字段添加索引：
+ 数据流庞大
+ 该字段很少的DML操作
+ 该字段经常出现在where子句中

+ 主键和具有unique的字段自动添加索引，尽量根据主键检索

```
//给sal字段添加索引
create index emp_sal_index on emp(sal);
```
索引的实现原理：
索引存储了对应数据的物理地址，对索引排序，用B树存储，查找时从树中找到对应节点的物理地址，直接从物理地址获得数据。

索引的分类：
+ 单一索引：给单个字段添加索引
+ 复合索引：多个字段联合添加
+ 主键索引：主键自动添加
+ 唯一索引：unique约束的字段自动添加

索引什么时候失效？
模糊查询，第一个通配符使用的是%

## 视图view
视图：站在不同的角度去看待数据。
```
//创建视图
create view myview as select empno,ename from emp;
//对视图进行增删改查，会影响到原表数据
```
作用：
+ 视图可以隐藏表的实现细节。保密级别较高的数据库只对外提供相关的视图。

## DBA命令
+ 导出数据库的数据
```
mysqldump database1>D:\db1.sql -uroot -paswd
```
+ 导入数据
```
create database db1;
use db1;
source D:\db1.sql;
```
## 数据库设计三范式
设计范式：设计表的依据。不会出现数据冗余

第一范式：每张表都有主键，每个字段原子性不可再分。

第二范式：第一范式基础上，所有非主键字段完全依赖主键，不能产生部分依赖。
多对多？三张表，关系表，两个外键
学生t_student
老师t_teacher
关系t_relation

第三范式：第二范式基础上，所有非主键字段直接依赖主键，不能产生传递依赖。
一对多？两张表，多的表加外键
班级t_class
学生t_student

一对一怎么设计？
+ 主键共享
+ 外键唯一







