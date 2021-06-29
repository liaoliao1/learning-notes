// typescript数据类型
// void    
// any
// never
// 元组
// 枚举
// 高级类型
// 类型注解
// 变量/函数 : type
// 数组
let arr1 : number[] = [1,2,3]
let arr2 : Array<number|string> = [1,2,3,'4']
//元组(限制数组的个数和类型)
let tuple : [number,string] = [1,'2']
//对象
let obj : {x:number, y:number} = {x:1, y:2}
obj.x = 3
//symbol(唯一的值)
let s1 : symbol = Symbol()
//never(永远无返回值)
let error = ()=>{
    throw new Error('error')
}

//枚举:一组有名字的常量集合
//数字枚举
enum Role{
    Reporter,
    Developer,
    Owner
}
//字符串枚举
enum Message{
    Success = '成功了',
    Fail = '失败了'
}
//异构枚举
enum Answer{
    N,
    Y = 'yes'
}
//常量枚举(在编译阶段移除)
const enum Month{
    Jan,
    Feb,
    Mar
}

//类型断言
interface Result{
    data:{
        id : number,
        name : string
    }
}
{obj} as Result

//函数定义的4种方式
//后3种只定义了函数类型
function add1(x: number, y: number) {
  return x + y;
}

let add2: (x: number, y: number) => number;

type add3 = (x: number, y: number) => number;

interface add4 {
  (x: number, y: number): number;
}

//可选参数使用？，必须位于必选参数之后
function add5(x: number, y?: number) {
  return y ? x + y : x;
}

//参数默认值
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}
add6(1, undefined, 3);

//剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, next) => pre + next);
}

//函数重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join("");
  }
  if (typeof first === "number") {
    return rest.reduce((pre, next) => pre + next);
  }
}

//类
class Dog {
  constructor(name:string) {
    this.name = name
  }
  //默认所有属性都是public
  public name: string
  run(){}
  //private只能在类里调用，不能被实例或子类调用
  private pri(){}
  //protected只能在类和子类中访问，不能在实例中访问
  protected pro(){}
  //readonly只读属性，必须初始化
  readonly legs:number = 4
  //static只能通过类名调用
  static food : string = 'bones'
  //构造函数参数加上修饰符，将参数变成实例的属性，不用在类中定义
}
class Husky extends Dog{
  constructor(name:string,public color:string){
    super(name)
    this.color=color
  }
  // color:string
}

//抽象类
//只能被继承，不能被实例化
abstract class Animal {
  eat() {
    console.log('eat');
  }
  //父类定义一个抽象方法，在子类不同实现
  abstract sleep() : void
}

//接口
//接口只约束类的公有成员，不能约束构造函数
//类实现接口需要实现所有属性
interface Human{
  name:string
  eat():void
}
class Asian implements Human{
  constructor(name:string){
    this.name=name
  }
  name:string
  eat(){}
  sleep(){}
}
//接口可以抽离类的属性
// ![](https://ftp.bmp.ovh/imgs/2020/09/751bc43e6f8f86e5.png)

//泛型
//不预先确定的数据类型，具体的类型在使用的时候才能确定
function log<T>(value:T):T{
  console.log(value)
  return value
}
//2种方式
log<string[]>(['a','b'])
log(['a','b'])

//定义函数类型
type Log = <T>(value:T) => T
let mylog: Log = log

//泛型接口
interface Log1<T=string>{
  (value:T) : T
}
let mylog1 : Log1 = log
mylog1('a')

//泛型类
class Log2<T>{
  run(value:T){
    console.log(value)
    return value
  }
}
let log1 = new Log2<number>()
log1.run(1)
let log2 = new Log2()
log2.run('1')

//泛型约束
interface Length{
  length:number
}
function log3<T extends Length>(value:T):T{
  console.log(value,value.length);
  return value
}
log3([1])
log3('123')
log3({length:1})

//-----------------------------
//类型检查机制
//ts编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为
//作用：辅助开发，提高开发效率

//1.类型推断
//不需要指定变量的类型，ts根据某些规则自动地为其推断出一个类型
//1.1 基础类型推断
//从右推左
//1.2 上下文类型推断
//根据左侧事件推断右侧
//1.3 最佳通用类型推断
//2.类型断言

//类型兼容性
//当一个类型Y可以被赋值给另一个类型X时，说X兼容Y
// X=Y


