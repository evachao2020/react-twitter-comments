import React from "react";   //js2015新特性
import reactDom from "react-dom"
import Comments from "./comment";   //引用comments.js
// import Car from "./car";
import Slider from "./slider";
import SearchBar   from "./searchBar";

//const react = require('react')   //old version, commonJS
//前端框架開發是模塊化開發, 一個一個的component為模塊
//前端框架一個特點：弱化DOM, 另一個特點：代碼混寫
//JSX使用特點：1.for,class這樣的關鍵字==> htmlFor, className. 2.所有tag必須成對.
//3.如果想在JSX里使用外部變量(js代碼),要加{}. EX:style{}
let test1 = 'curry'
let testProps = {   //就算是object的變量, 也能傳值
    name1:'Stan',
    name2:'Henry'
}

//oop面向對象概念,class component

let num = 0
setInterval(() => {
    num++
    console.log(num)
//Consloe 是有執行這個代碼,但JSX沒有刷新介面,因function component 沒有動態化
}, 1000)

const testFun = () => {   //名字首字母若是小寫,默認為普通JS function
    return 'stan'
}

const Index = () => {   //function component 和 class component. 名字首字母必須大寫
    return(
        <div className="container d-flex flex-column">
            <SearchBar></SearchBar>
            <Slider></Slider>
            <label htmlFor="input1">{num}</label>
            <input type="text" id="input1"></input>
            <button style={{backgroundColor:'green', color:'white'}}>{testFun()}</button>
            <Comments name={testProps}/>   {/*父親傳給兒子index.js===>comments.js*/}
        </div>
    )
}

reactDom.render(<Index></Index>, document.getElementById('root'))