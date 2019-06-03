import React, { Component } from 'react'
import './First-section.css'
import Navbarr from '../navbar/Navbarr';
import FsTagline from '../FSTagLine/FsTagLine';
import Mobile from '../images/de5d3a0eff90b.png'
export default class First_section extends Component {
    render() {
        return (
            <div className="first-section">
                <div className="container">
                    <Navbarr /> 
                    <div className="row mx-0">
                        <div className="col-md-8"><FsTagline /></div>
                        <div className="col-md-4">
                            <img src={Mobile} className="img-fluid" alt="Mobile"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
