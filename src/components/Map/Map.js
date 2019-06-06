import React, { Component } from 'react'
import './map.css'
export default class Map extends Component {
    render() {
        return (
            <div>
                <div className="mapouter p-1">
                    <div className="gmap_canvas">
                        <iframe title="map" width="1350px" height="250px" id="gmap_canvas" src="https://maps.google.com/maps?q=bangaluru&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="1" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        <div className="subss">
                            <h5 className="text-center p-2">Subscribe For Newsletter</h5>    
                           <input className="bust" type="text" placeholder="Enter Email id"></input>
                           <button className="btns">SUBSCRIBE</button>
                        </div>        
                    </div>
                    

                </div>
                
            </div>
        )
    }
}
