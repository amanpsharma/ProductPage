import React, { Component } from 'react'
import './slider.css'
import {Carousel} from 'react-bootstrap'
export default class Sider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.props.imageOne}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.props.imageTwo}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                     <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.props.imageThree}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
