import React, { Component } from 'react'
import './price.css'
export default class Price extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="screens text-center">our prices</h1>
                    <p className="text-center">
                        Lorem ipsum, dolor sit amet consectetur </p>
                    <p className="text-center">adipisicing elit. Earum fuga, nobis accusamus perferendis nulla cum.
                    </p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="basic m-1">
                                <div className="circle-style">
                                    <span className="circle-text">BASIC</span>
                                </div>
                                <div className="content centering">
                                    <h4>$19<span class="small"><small>/MON</small></span></h4>
                                    <p>Great Services</p>
                                    <p>24/7 Live Support</p>
                                    <p>50 GB Disk Space</p>
                                    <ul>
                                        <li>Costomber Management</li>
                                        <li>Unlimited Features</li>
                                        <li>5-Active Accounts</li>
                                    </ul>
                                    <button className="byenow">BUY NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="basic-2 m-1">
                                <div className="circle-style-2">
                                <span className="circle-text-2">STANDARD</span>
                                </div>
                                <div className="content centering">
                                    <h4>$35<span class="small"><small>/MON</small></span></h4>
                                    <p>Great Services</p>
                                    <p>24/7 Live Support</p>
                                    <p>50 GB Disk Space</p>
                                    <ul>
                                        <li>Costomber Management</li>
                                        <li>Unlimited Features</li>
                                        <li>5-Active Accounts</li>
                                    </ul>
                                    <button className="byenow">BUY NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="basic m-1">
                                <div className="circle-style">
                                <span className="circle-text">PREMIUM</span>
                                </div>
                                <div className="content centering">
                                    <h4>$51<span class="small"><small>/MON</small></span></h4>
                                    <p>Great Services</p>
                                    <p>24/7 Live Support</p>
                                    <p>50 GB Disk Space</p>
                                    <ul>
                                        <li>Costomber Management</li>
                                        <li>Unlimited Features</li>
                                        <li>5-Active Accounts</li>
                                    </ul>
                                    <button className="byenow">BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
