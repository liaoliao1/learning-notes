![](https://ftp.bmp.ovh/imgs/2020/11/1db5aa557fd689d9.png)
# Java
# 2020.10.22
## 常用命令行指令
```
md 创建目录
rd 删除空目录
echo content>1.txt 创建文件
del 删除文件
dir 查看目录文件
```
## 语言特点
1. 面向对象
2. 健壮性
3. 跨平台性

## 类名
声明为public的类的类名必须与源文件名相同，一个源文件可以声明多个class，但是只能有一个类声明为public。

## 编译
字节码文件名与java源文件中的类名相同

## 变量
+ 先声明、初始化后才能使用
+ 在作用域内{ }有效
+ 使用变量名访问内存区域

## 数据类型
+ 基本数据类型
	+ byte(1字节)
	+ short(2字节) 
	+ int(4字节)
	+ long(8字节，必须以L，l结尾)
	+ float(4字节，7位精度，以f、F结尾)
	+ double(8字节)
	+ char(2字节，一个字符，'\n' 换行符， Unicode '\u0043')
	+ boolean(true,false)
+ 引用数据类型
	+ class (字符串) 
	+ interface
	+ 数组 [ ]

## 类型转换
+ 自动类型提升
	
	结果自动提升为容量大的数据类型
	
	byte、 short、char  => int => long => float => double
	
	特别地，byte、short、char三种类型做运算时，结果为int型
	
+ 强制类型转换

	向容量小的数据类型转换，使用( )
	

整型默认为int型，浮点型默认为double型

## String 引用数据类型
String类型只可以和8种基本数据类型做连接 (+) 运算

## 进制
+ 二进制，0b开头
+ 八进制，0开头
+ 十六进制，0x开头

## &和&&
+ &：执行右边运算
+ &&：短路与，左边为false时，不执行右边运算

开发中使用&&

# 2020.10.23
## Scanner键盘获取
```
import java.util.Scanner;

Scanner scan = new Scanner(System.in);
int num = scan.nextInt();
String str = scan.next();
double dou = scan.nextDouble();
boolean isTure = scan.nextBoolean();
```

## switch
case中没有break的话会执行后续所有语句，没有匹配执行default中的语句。

switch( )中的表达式只能是byte, short, char, int, 枚举类型， String类型。

case中只能写常量。

## label
```
label: for循环
	break label  结束指定标识的for循环
	continue label  结束指定标识的当此循环
```

## 数组
+ 本身是引用数据类型，元素可以是任何数据类型。
+ 创建数组开辟一块连续的内存空间，数组名引用的是空间的首地址
+ 数组长度确定后不能修改

数组声明和初始化：
```
int[] arr1 = new int[]{1,2,3};
int[] arr2 = new int[3];
```
+ 数组元素为整型，默认初始化为：0
+ 浮点型：0.0
+ char型：0 或 '\u0000'
+ boolean型：false
+ 引用数据类型：null 

## 二维数组
初始化
```
int[][] arr1 = new int[]{[1,2,3],[4,5,6],[7,8]};
int[][] arr2 = new int[3][2];
```
arr1 和 arr1[0] 为地址值，外层元素初始化值为地址值，内层元素初始化与一维数组相同。

# 2020.10.24
## 属性(成员变量)vs局部变量
不同点：
1. 定义位置

	+ 属性：定义在类中 { }
	+ 局部变量：声明在方法内、方法形参、代码块内、构造器形参、构造器内部

2. 权限修饰符

	+ 属性：可以在声明时使用权限修饰符(private,public,缺省,protected)
	+ 局部变量：不可以使用

3. 默认初始化值

	+ 属性：和其类型初始化值相同
	+ 局部变量：没有默认初始化值

4. 内存中加载位置

	+ 属性：加载到堆空间（非static）
	+ 局部变量：栈空间 

相同点：
+ 定义格式相同
+ 先声明后使用
+ 都有其对应的作用域

## 方法
+ 方法内部不能再定义方法

## 匿名对象
创建的对象没有显示的赋给一个变量名，只能调用一次。
```
new Phone.show();
mall.show(new Phone())
```

## 方法的重载
Overload：**同一个类**中，多个**同名方法**，只要**参数个数或参数类型**不同即可。

## 可变个数的形参
```
0个或多个String型的参数
public void show(String ... strs){
}
public void show(String[] strs){
}
两种相同，不能同时存在，不构成重载
```
+ 可变形参最多有一个
+ 在形参中必须声明在末尾

## 值传递
+ 如果参数是基本数据类型，实参赋给形参的是数据值。
+ 引用数据类型，传递的是实参数据的地址值。

## 封装性
隐藏对象内部的复杂性，只想外暴露简单的接口。

1. 类的属性私有化，外部使用方法访问
2. 私有的方法
3. 单例模式

## 权限修饰符
+ private：类内部
+ 缺省：类内部、同一个包
+ protected：类内部、同一个包、不同包的子类
+ public：类内部、同一个包、不同包的子类、同一工程 

可以用来修饰类及类的内部结构：属性、方法、构造器、内部类。

修饰类，只能用缺省、public。

## 构造器constructor
作用：
+ 创建对象： new+构造器。
+ 初始化对象信息

```
权限 类名(形参列表){}
public Person(){
}
```
+ 多个构造器彼此构成重载。
+ 系统默认提供一个空参的构造器。
+ 一旦显示定义类的构造器，就不再提供默认的空参构造器。

## 属性赋值的顺序
1. 默认初始化
2. 显示初始化
3. 构造器初始化
4. “对象.属性”或“对象.方法”方式赋值

## JavaBean
是一种Java语言写成的可重用组件。

+ 类是公共的
+ 有一个无参的公共的构造器
+ 有属性，且有对应的get、set方法

## this
表示当前对象，可以修饰属性、方法、构造器。

this调用构造器
+ this(形参列表) 调用本类中的**其他构造器**
+ 不能相互调用
+ this() 必须放在构造器首行
+ 一个构造器只能使用一次this()
```
public Person(){
	syso("多行代码");
}
pubic Person(String name){
	this();
	this.name = name;
}
 public Person(String name, int age){
 	this(name);
 	this.age = age;
 }
```
# 2020.10.25
## package
1. 为了更好的管理类，提供包的概念
2. package声明在源文件首行
3. 包属于标识符，遵循标识符的命名规则、规范
4. 每“ . ”一次，代表一层文件目录

## import 
1. 在源文件中显示地使用import导入指定包下的类、接口
2. 声明在包和类的声明之间
3. 使用`xxx.*` 表示可以导入xxx包下的所有结构
4. 如果类或接口是java.lang包下的或者是当前包下的，可以省略import 
5. 如果使用不同包下的同名类，需要以全类名的方式显示(包名.类名)
6. 如果使用xxx子包下的结构，仍需import
7. import static 导入指定类或接口中的静态结构：属性或方法

## Eclipse快捷键
```
补全代码：alt + /
快速修复：ctrl + 1
批量导包：ctrl + shift + o
多行注释：ctrl + shift + /
取消多行注释：ctrl + shift + \
复制多行代码：ctrl + alt + down
删除指定行：ctrl + d
切换到下一行空位：shift + enter
切换到上一行：ctrl + shift + enter
退回前一个编辑的页面：alt + left
进入下一个：alt + right
查看继承树结构：ctrl + t
格式化代码：ctrl + shift + f
数行整体前移：shift + tab
查找指定方法、属性：ctrl + o
批量修改：alt + shift + r
变大写：ctrl + shift + x
变小写：ctrl + shift + y
生成get/set/构造器：alt + shift + s
快速查找：ctrl + k
哪些位置用过此结构：ctrl + clt + g
```

# 2020.10.26
## 继承性
好处：
+ 提高代码复用性
+ 便于功能的拓展
+ 为之后多态性提供了前提

体现：
+ 一旦子类A继承父类B以后，A中就获取了B中的所有属性、方法。
+ private修饰的属性或方法，子类仍然可以得到，只是因为封装性，不能直接调用。
+ 子类继承后，可以声明自己特有的属性和方法，实现功能的拓展。

## java继承的规定
+ 一个类可以被多个子类继承
+ 单继承：一个类只能有一个父类
+ 子类直接继承的类称为：直接父类，间接继承的类称为：间接父类
+ 子类继承父类以后，就获取了直接父类和所有间接父类中声明的属性和方法

## Object类
1. 如果没有显式的声明一个类的父类，则此类继承于java.lang.Object类
2. 所有的java类都直接或间接继承于java.lang.Object类

## 方法的重写
子类中对父类继承来的方法进行改造，程序执行时，子类的方法将覆盖父类的方法。

1. 子类重写的方法名和形参列表与父类相同
2. 子类重写的方法的权限修饰符范围大于等于父类
	子类不能重写父类private修饰的方法
3. 返回值类型：
	父类方法返回值为void，子类返回也只能是void
	父类方法返回A类型，子类返回可以是A类型或A类的子类型
	父类方法返回是基本类型，子类返回相同的基本类型
4. 子类重写的方法抛出的异常类型不大于父类方法抛出的异常类型

子类和父类同名同参数的方法都是static（不是重写）或者都是非static（重写）。

## super 
super调用属性、方法

1. 理解为：父类的
2. super可以调用属性、方法、构造器
3. 在子类的方法或构造器中，可以用super.属性或super.方法调用父类中声明的属性或方法，但是通常情况下，习惯省略super
4. 子父类定义了同名的属性时，想要在子类调用父类中声明的属性，必须使用super.属性
5. 子类重写父类的方法以后，想要调用父类方法，必须使用super.方法

super调用构造器

1. 可在子类的构造器中使用 super(形参列表) 的方式调用父类的指定构造器
2. super(形参) 必须声明在子类构造器的首行
3. 构造器中，this(形参) 和 super(形参) 只能使用一个
4. 构造器中没有this和super，默认调用父类的空参构造器 super( )
5. 一个类的多个构造器中，至少有一个使用了 super(形参) 调用父类的构造器

## 多态性
对象的多态性：父类的引用指向子类的对象。实现代码的通用性。

多态的使用：当调用子父类同名同参数的方法，执行的是子类重写父类的方法。父类方法称为虚拟方法，运行时根据传入子类对象动态调用子类的方法，是运行时行为。---虚拟方法调用/动态绑定

编译期，只能调用父类声明的方法，但在运行期，实际执行的是子类重写父类的方法。 

多态使用的前提：
+ 类存在继承关系
+ 有方法的重写

对象的多态性不适用于属性，只适用于方法。

## 向下转型
```
Person person = new Student();  // 向上转型、多态
Student s = (Student)person;  //向下转型
```

## instanceof
a instanceof A ： 判断a是否是类A的实例，是返回true，不是返回false。

使用情景：为了避免向下转型时出现ClassCastException的异常，向下转型前，先进行instanceof的判断。

# 2020.10.27
## Object类
属性：无

方法：equals() / toString() / getClass() / hashCode() / clone() / finalize() / wait() / notify() notifyAll()

## == 和 equals()
==的使用：运算符，使用在基本数据类型和引用数据类型中。
+ 基本数据类型，比较两个数据是否相等，不一定类型要相同
+ 引用数据类型，比较两个地址值是否相同

equals()方法的使用：
+ 是一个方法，不是运算符
+ 只适用于引用数据类型

Object类中equals方法和==相同，像String、Date类都重写了equals方法，比较两者的实体内容是否相同。

## toString()
输出一个引用对象时，实际调用的是对象的toString()方法。

Object类中toString()返回地址，像String、Date、File类都重写了toString()方法，返回对象的实体内容。

## 单元测试
1. 选中工程 - 右键build path - add libraries - JUnit 4
2. 创建类进行单元测试，类是public的，默认无参构造器
3. 类中声明单元测试方法，方法是public void 的，没有形参
4. 单元测试方法上声明注解@Test，并引入org.junit.Test
5. 双击单元测试方法名，run as 选择  JUnit Test

如果执行没有异常：绿条
出现异常：红条

## 包装类（Wrapper）
针对八种基本数据类型定义相应的引用类型
```
byte	  Byte
short     Short
int 	  Integer
long 	  Long 
float 	  Float
double 	  Double
boolean   Boolean
char 	  Character
```

## 基本数据类型、包装类、String相互转换
基本数据类型==>包装类
```
1.包装类的构造器
Integer in1 = new Integer(10);
Integer in2 = new Integer("10");
in1.toString(); 
2.自动装箱
int num1 = 10;
Integer in3 = num1;
```
包装类==>基本数据类型
```
1.调用包装类的xxxValue()
Integer in1 = new Integer(10);
in1.intValue();  //10
2.自动拆箱
Integer in2 = new Integer(10);
int num1 = in2;
```
基本数据类型\包装类==>String类型
```
1.连接运算
int num1 = 10;
String s1 = num1 + "";
2.调用String重载的valueOf()
float f1 = 12.3f;
String s2 = String.valueOf(f1); //"12.3"
```
String类型==>基本数据类型\包装类
```
1.调用包装类的parseXxx()方法
String s1 = "123";
Integer.parseInt(s1); //123
```

## IntegerCache
Integer内部定义了IntegerCache结构，Integer[]保存了-128到127的整数，范围内的数直接使用，不用再去new对象，提高效率。

## static
静态的，可以修饰属性、方法、 代码块、内部类

static修饰属性：静态变量
非static修饰的：实例变量
+ 当创建类的多个对象，共享同一个静态变量，某一个对象改变静态变量时，其他对象调用时是修改过的。
+ 静态变量随着类的加载而加载，可以通过 类.静态变量 方式调用
+ 静态变量的加载要早于对象的创建
+ 由于类只加载一次，静态变量在内存中也只会存在一份，存在方法区的静态域中
举例：System.out  Math.PI

static修饰方法：静态方法
+ 随着类的加载而加载，可以通过 类.静态方法 方式调用
+ 静态方法中只能调用静态方法或静态属性
+ 非静态方法中，既可以调用静态的，也可以调用非静态的
+ 静态方法内不能使用this、super关键字

何时声明为static？
+ 属性被多个对象公用
+ 类中的常量
+ 操作静态属性的方法通常为static
+ 工具类中的方法习惯声明为static

## 单例（Singleton）设计模式
类只存在一个对象实例，减少了系统性能开销。
```
1.饿汉式
坏处：对象加载时间过长。好处：饿汉式是线程安全的。
class Bank{
	//构造器私有化
	private Bank(){
	}
	//内部创建类的对象，声明为静态的
	private static Bank instance = new Bank();
	//提供静态公共方法返回对象
	public static Bank getInstance(){
		return instance;
	}
}
2.懒汉式 
好处：延迟对象的创建。坏处：线程不安全。
class Order{
	//构造器私有化
	private Order(){
	}
	//声明类对象，没有初始化
	private static Order instance = null;
	//提供静态公共方法返回对象
	public static Order getInstance(){
		if(instance == null){
			instance = new Order();
		}
		return instance;
	}
}
```

## main方法
+ main()方法作为程序入口
+ 也是一个普通的静态方法
+ main()方法可以作为我们与控制台交互的方式

## 代码块
作用：用来初始化类、对象
+ 修饰的话只能使用static

静态代码块：static{ }
+ 内部可以有输出语句
+ 类加载时执行，只执行一次
+ 作用：初始化类的信息
+ 如果多个静态代码块，按照声明从上往下执行
+ 静态代码块先于非静态代码块执行
+ 只能调用静态属性、方法

非静态代码块：{ }
+ 内部可以有输出语句
+ 随着对象创建而执行
+ 每创建一个对象，就执行一次
+ 作用：可以创建对象时，对对象的属性等进行初始化

执行顺序：由父至子，类加载执行静态代码块，普通代码块，构造器

## final
可以修饰类、方法、变量

+ 修饰类：不能被其他类继承，比如String类、System类
+ 修饰方法：不能被重写，比如Object类的getClass()方法
+ 修饰变量：变为一个常量，一般大写
	+ 修饰属性，考虑赋值的位置：显示初始化、代码块初始化、构造器初始化
	+ 修饰局部变量，表明形参是一个常量

static final 修饰属性：全局常量

# 2020.10.28
## abstract
可以修饰类、方法。

抽象类
+ 此类不能实例化
+ 有构造器
+ 通过抽象类的子类实例化，调用抽象类的构造器

抽象方法
+ 只有方法声明，没有方法体
+ 包含抽象方法的类一定是一个抽象类
+ 若子类重写了父类中的所有抽象方法后，此类可实例化，否则此类需要声明为抽象类

## 抽象类的匿名子类
```
创建匿名子类的对象p
Person p = new Person(){
	public void eat(){}  //重写父类Person的方法
	public void breath(){}
}
```

## 接口interface
java中接口和类是并列的结构

+ 接口没有构造器，不能实例化
+ 接口通过类实现接口(implements)来使用，如果实现类覆盖了接口中的所有抽象方法，此类可以实例化，否则此类为抽象类
+ java类可以实现多个接口，弥补了java单继承的局限性
+ 接口与接口之间可以多继承
+ 接口使用上满足多态性

JDK7及以前：
只能定义全局常量和抽象方法
全局常量：public static final (可以省略)，抽象方法：public abstract  (可以省略)
```
interface Flyable{
	public static final int MAX_SPEED = 7900; //全局常量
	public abstract void fly(); //抽象方法
}
class Plane implements Flyable{
	public void fly(){}
}
```

JDK8：
还可以定义静态方法、默认方法

+ 接口中定义的静态方法，只能通过 接口.方法 调用
+ 通过类的对象可以调用接口的默认方法
+ 如果继承的父类和接口声明了同名同参数的方法，子类没有重写，调用时是父类的方法
+ 类实现多个接口，多个接口中定义了同名同参数的默认方法，没有重写，会报错

## 内部类
成员内部类 vs 局部内部类（方法内、构造器内、代码块内）

成员内部类
+ 作为外部类的成员：调用外部类的结构、可以被static修饰、可以被修饰符修饰
+ 作为一个类

如何实例化成员内部类？ 
```
1.静态成员内部类
Person.Inner in = new Person.Inner();
1.非静态成员内部类
Person p = new Person();
Person.Inner in = p.new Inner();
```
成员内部类中区分调用外部类的结构
```
this.name //内部类的属性
Person.this.name //外部类的属性
```

# 2020.10.31
## 异常
Error:
Java虚拟机无法解决的严重问题，比如栈溢出、堆溢出，一般不处理。

Exception:
因编程错误或偶然的外在因素导致的一般性问题，比如空指针访问、读取不存在文件、网络连接中断。

分为编译时异常、运行时异常

java.lang.Throwable  父类
+ java.lang.Error
+ java.lang.Exception

## 异常处理
通过针对编译时异常，进行异常处理
方式一：
try-catch-finally：真正将异常处理掉
finally中是一定会执行的代码

方式二：
throws + 异常类型：将异常抛给方法的调用者，没有真正地处理

常用的语句：
e.getMessage()	e.printStackTrace()

# 2020.11.1
## throw和throws
throw：抛出一个异常类的对象，声明在方法体内
throws：属于异常处理的一种方式，声明在方法的声明处














