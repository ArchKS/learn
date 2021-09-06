/*
 * @Author: zendu 
 * @Date: 2021-09-06 15:27:39 
 * @Desc: 鸭子模型
 */

// 目前有 会飞的鸭子 不会飞的鸭子两种，如果之后要添加火箭鸭，则只需要编写火箭鸭的飞行方法fly，其他可以共用，比如quack喊叫方法就不需要再写一遍了。

// 设计大局
// 鸭子 继承Duck、飞行行为实现FlyBehavior接口、呱呱叫行为实现QuackBehavior接口


// 飞
class FlyBehavior {
    fly(){}
}

class FlyWithWing extends FlyBehavior{
    fly(){
        console.log("I can fly with wing...");
    }
}

class NoFly extends FlyBehavior {
    fly(){
        console.log("I can not fly...");
    }
}

class FlyRocetPowered extends FlyBehavior {
    fly(){
        console.log("Fly Rocket Powered...");
    }
}


// 叫
class QuackBehavior{
    quack(){}
}

// 嘎嘎叫
class Quack extends QuackBehavior {
    quack(){
        console.log("Quack...");
    }
}

// 吱吱叫
class Squeak extends QuackBehavior {
    quack(){
        console.log("Squeak...");
    }
}

// 不会叫
class MuteQuack extends QuackBehavior{
    quack(){
        console.log("Slience...");
    }
}


class Duck {
    flyBehavior:FlyBehavior;
    quackBehavior:QuackBehavior;
    
    flyPerform(){
        this.flyBehavior.fly();
    }
    quackPerform(){
        this.quackBehavior.quack();
    }
}

// 野鸭，嘎嘎叫，会飞
class MallardDuck extends Duck {
    flyBehavior = new FlyWithWing();
    quackBehavior = new Squeak();
}


// 模型鸭，不会叫，不会飞
class ModuleDuck extends Duck {
    flyBehavior = new NoFly();
    quackBehavior = new MuteQuack();
}

// 迷你鸭子发射器 
class MiniDuckSimulator extends Duck {
    flyBehavior = new FlyRocetPowered();
    quackBehavior = new MuteQuack();
} 

// 模型鸭
let moduleDuck = new ModuleDuck();

// 普通鸭
let commDuck = new MallardDuck();

// 火箭鸭
let miniRocketDuck = new MiniDuckSimulator();


moduleDuck.flyPerform();
commDuck.flyPerform();
miniRocketDuck.flyPerform();