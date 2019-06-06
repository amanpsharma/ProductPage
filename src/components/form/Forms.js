import React, { Component } from 'react'
import './form.css'
export default class Forms extends Component {
    render() {
        return (
            <div>
                <div className="container px-5">
                    <div className="row px-2">
                        <div className="col-md-6 offset-2 px-5">
                        <div>
                            <div>
                                <label>Name</label>                            
                                    <input type="text" placeholder="Name"></input>
                                </div>
                                <div>
                                    <label>Email</label>
                                <input type="text" placeholder="Email"></input>
                                </div>
                                <div>
                                    <label>Message</label><br/>
                                    <textarea className="msg"></textarea>
                                </div>
                                <div>
                                <button className="btnn">SEND</button>
                            </div>
                        </div> 
                        </div> 
                    </div>                  
                </div>
            </div>
        )
    }
}
