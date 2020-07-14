import React, {Component} from "react";   //1:05:00
//前端框架核心概念:數據改變驅動介面刷新
// //數據流動方向是單向,由內而外流動
class Slider extends Component{
    num = 0   //給一個變量
    picArr = [   //定義了property-->picArr
        'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-200127-furniture-en.jpg',
        'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-200131-diamonds-en.jpg',
        'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-200127-valentines-en.jpg',
        'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-200113-pirelli-en.jpg'
    ]
    state = {   //object類型, 紀錄class component狀態
        count : 0,   //Key : Value
        startOrStop : true   //定義一個布爾值變量   //Key : Value
    }
    constructor() {
        super();
        setInterval(() => {
            if(this.state.startOrStop) {
                this.num++
            }
            if(this.num >= this.picArr.length) {
                this.num = 0
            }
            this.setState({count: this.num})
            // console.log(this.state.count)
        },1500)
    }

    stopChanging = () => {
        this.setState({startOrStop: !this.state.startOrStop})   // ! 取反
    }

    selectPic = index => {
        this.num =index
        this.setState({count: index})
    }

    renderBtn = () => {
        return(
            this.picArr.map((value, index) =>{
                //map是array原生的函數,天生返回一個數組.不用forEach,因為我們要返回值ss
                return <button key={index} style={{background: index === this.state.count ? "pink" : ''}}
                               onClick={event => this.selectPic(index)} class="btn btn-info">{`Button${index+1}`}</button>
            })
        )
    }

    render() {
        return (
            <div className="container d-flex flex-column">
                <div className="row justify-content-center m-3">
                    <img src={this.picArr[this.state.count]} alt=""/>
                </div>
                <div className="row justify-content-around">
                    {this.renderBtn()}
                    <button className={this.state.startOrStop ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-danger'} onClick={this.stopChanging}>{this.state.startOrStop ? 'Stop' : 'Start'}</button>
                </div>
            </div>

        );
    }
}
export default Slider