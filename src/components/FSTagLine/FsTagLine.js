import React, { Component } from 'react'
import './fstagline.css';
export default class FsTagLine extends Component {
    render() {
        return (
            <div className="my-5 py-5">
                <h1 className="head">Make Your Mobile APP</h1>
                <h1 className="head"> Landing Page Awesome</h1>
                <p className="headtext">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Fugiat reiciendis reprehenderit sapiente quas amet impedit 
                    dolore corrupti perspiciatis quos molestias sunt at, non 
                    voluptas, vero accusantium atque recusandae quasi. Perferendis 
                </p>
                <button className="btn btn-success customBtn">DOWNLOAD</button>
                <i class="fa fa-android mx-2" style={{color:"white"}} aria-hidden="true"></i>
                <i class="fa fa-apple mx-2" style={{color:"white"}} aria-hidden="true"></i>
                <i class="fa fa-windows mx-2" style={{color:"white"}} aria-hidden="true"></i>
            </div>
        )
    }
}
