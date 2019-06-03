import React, { Component } from 'react'
import './firstCard.css';
import Avatar from '../images/user.png'
import {Card} from 'react-bootstrap';
export default class FirstCard extends Component {
    state={
        detail:[
            {id:1,image:Avatar,heading:"Awesome Layouts",para:"Lorem ipsum dolor,  eum in, odio quam? Sed dolores doloriSed dolores doloribus laborebus labore provident cumque!"},
            {id:2,image:Avatar,heading:"Useful Features",para:"Lorem ipsum dolor,  eum in, odio quam? Sed dolores doloriSed dolores doloribus laborebus labore provident cumque!"},
            {id:3,image:Avatar,heading:"Responsive Layout",para:"Lorem ipsum dolor,  eum in, odio quam? Sed dolores doloriSed dolores doloribus laborebus labore provident cumque!"},
        ]
    }
    render() {
        return (
            
                <div className="container">
                    <div className="row">
                        {this.state.detail.map(user=>{
                            return (
                            <div className="col-md-4" key={user.id}>
                                <div className="text-center">
                                    <img src={user.image} className="img-fluid" alt="user" style={{display:"inline-block"}}/>
                                    <h5 style={{color:"#fff",fontWeight:"700"}}>{user.heading}</h5>
                                    <p style={{color:"#fff"}}>{user.para}</p>
                                </div> 
                           </div>
                            )
                        }
                        )}
                    </div>             
                </div>
        )
    }
}
