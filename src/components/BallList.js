import React, { Component } from 'react'
import Ball from './Ball'
import getRandom from '../util'

export default class BallList extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state={
            ballList:[]
        }
        const timer = setInterval(() => {
            const info = {
                left:getRandom(0,document.documentElement.clientWidth - 100),
                top:getRandom(0,document.documentElement.clientHeight - 100),
                bg:`rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`,
                xSpeed:getRandom(50,300),
                ySpeed:getRandom(50,400)
            }
            this.setState({
                ballList:[...this.state.ballList,info]
            })
            if(this.state.ballList.length >= 15){
                clearInterval(timer)
            }
        }, 2000);

    }
    render() {
        const balls = this.state.ballList.map((item,i) => <Ball key={i} {...item} />)
        return (
            <div>
                {balls}
            </div>
        )
    }
}
