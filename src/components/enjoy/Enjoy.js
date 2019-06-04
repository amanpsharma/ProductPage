import React, { Component } from 'react'
import './enjoy.css'
export default class Enjoy extends Component {
    render() {
        return (
            <div className="colo" style={{background:'blue', color:'white'}}>
                <div className="container centering p-5">
                    <h3>Let's Enjoy Our App!</h3>
                    <h3>Download our App 100% free Forever</h3>
                    <div className="row">
                    <button class="btn byenows"><i class="fa fa-home"></i> Home</button>
                    <button class="btn byenows"><i class="fa fa-bars"></i> Menu</button>
                    <button class="btn byenows"><i class="fa fa-trash"></i> Trash</button>    
                    </div>
                    
                </div>
            </div>
        )
    }
}
