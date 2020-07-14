// import React from "react";
//
// //在JS寫TAG,可直接JSX解析(Line4-19)
// const testBtn =() => {   //綁定一個const函數(Line10)
//     window.confirm('test button')
// }
//
// let oDiv = <div>
//     Hello Ｗorld
//     <button onClick={testBtn}>Button</button> //綁定一個const函數(Line4)
// </div>
//
// const Car = () => {
//     return <div>
//         {oDiv}
//     </div>
// }
// export default Car
//console.log(oDiv)

//oop 面向對象（object oriented programming） 封裝,繼承,多態(24:00)

//1.封裝:把代碼封裝成一個類(class)(24:00-47:00)
//寫一個類(class)(keyword+對象name) ex:car生產線
class Car {
    brand = 'BMW'   //定義一個變量 = 定義一個key(初始值)
    seats = 5   //定義一個變量 = 定義一個key(初始值)
    color = 'white'   //定義一個變量 = 定義一個key(初始值)
    fuel = 0   //(59:00)
    soundEffect = 'tututu'

    makeMoney() {   //類(class)也可以有函數
        console.log('driving uber')
    }

    drive = () => {
        console.log('Driving, with sound effect:' + this.soundEffect)
        // console.log(this)   //cause function scope==>所以undefined(穿不透)
    }

    fillGas(litter){
        console.log(`current level: ${this.fuel}`)   //class的property會紀錄狀態
        this.fuel += litter
        console.log(`current level: ${this.fuel}`)   //class的property會紀錄狀態
    }
    //構造函數(函數可以傳參數)(相當於定義一個函數)
    constructor(brand, seats, color) {
        //this 當前發生事件的元素本身
        this.brand = brand   //把參數的brand-->附值給類(class)的brand
        this.seats = seats   //把參數的seats-->附值給類(class)的seats
        this.color = color   //把參數的color-->附值給類(class)的color
        // this.drive = this.drive.bind(this)   //成功找到值
    }
}

//2.繼承:兒子(Tesla)繼承父親(car)(Line25)(47:00-56:00)
class Tesla extends Car{
    emotor = 4
    constructor(brand, seats, color, emotor) {
        super(brand, seats, color, emotor);
        this.emotor = emotor
    }
    makeMoney() {
        super.makeMoney();
    }
}

//定義car1,通過new這樣一個類,生成一個object ex:生產car
let car1 = new Car('benz','7', 'black')
car1.drive()   //# Car { brand = 'BMW', seats = 5, color = 'white', fuel = 0, soundEffect = 'tututu'}
const testDrive = car1.drive
testDrive()   //undefined
// car1.makeMoney()   //#driving uber
car1.fillGas(10)   //#current level:0 , #currnet level:10
car1.fillGas(30)  //#current level:10 , #currnet level:40
let car2 = new Car()
// console.log('car1 -->', car1)   //#car1 -->Car {brad:'benz', seats:7, color:'black'}
// console.log('car2 -->', car2)   //#car2 -->Car {brad:undefined, seats:undefined', color:undefined})

//面向對象 for example:
//JS已經寫好類(class),所以自動生成
//無論定義string, number, object
//new XMLHttpRequest(), new了一下,自動生成object
let arr1 = new Array ('apple', 'pear')
// console.log(arr1)   //#['apple', 'pear']

//定義tesla1,通過new這樣一個類,生成一個object ex:生產Tesla
let tesla1 = new Tesla('Tesla', '2', 'black', 6)
// .console.log(tesla1)   //#Tesla {brad:'Tesla', seats:2, color:'black', emotor: 6}(Line42)
// tesla1.makeMoney()   //#driving uber