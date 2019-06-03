import React, { Component } from 'react'
import './screencontent.css'
import Slider from '../slider/Sider'
import Mobile from '../images/screenshoot.png'
import MobilePh from '../images/app-screenshoot.jpg'
export default class ScreenContent extends Component {
    
    render() {
        
        return (
            <div className="container">
                <h1 className="screens text-center">SCREENSHOOTS</h1>
                <p className="text-center">
                    Lorem ipsum, dolor sit amet consectetur </p>
                 <p className="text-center">   adipisicing elit. Earum fuga, nobis accusamus perferendis nulla cum.
                </p>
                <Slider imageOne={Mobile} imageTwo={MobilePh} imageThree={Mobile}/>
            </div>
        )
    }
}
