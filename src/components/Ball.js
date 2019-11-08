import React, { Component } from 'react'
import '../assets/ball.css'

export default class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            xSpeed: props.xSpeed || 100,
            ySpeed: props.ySpeed || 100,
        };
        const duration = 16;
        setInterval(() => {
            const xDis = this.state.xSpeed * duration / 1000;
            const yDis = this.state.ySpeed * duration / 1000;
            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;

            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            if (newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }
            if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }
            this.setState({
                left: newLeft,
                top: newTop,
            })

        }, duration);

    }



    render() {
        return (
            <div className='ball' style={{
                backgroundColor: this.props.bg || 'yellow',
                left: this.state.left,
                top: this.state.top
            }} >

            </div>
        )
    }
}
