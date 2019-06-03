import React, { Component } from 'react'
import './feature.css'
export default class Feture extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 m-5">
                        <h1>waiting</h1>
                    </div>
                    <div className="col-md-8 m-5">
                        <h1>BEST FEATURE</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nisi cupiditate iusto adipisci necessitatibus unde 
                            reprehenderit omnis amet quasi suscipit delectus?
                        </p>
                        <div className="col-md-6">
                             <i class="fa fa-mobile" aria-hidden="true"></i>
                             <span></span>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        )
    }
}
