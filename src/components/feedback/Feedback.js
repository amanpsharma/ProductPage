import React, { Component } from 'react'
import './feedback.css'
import Avatar from '../images/user.png'
export default class Feedback extends Component {
    state={
        details:[
            {id:1,images:Avatar,title:"Mr. Kavin R. Malhotra",titles:"Mr. Kavin R. Malhotra",desc:"They have distinct characteristics that can effect our mood, influence our behavior, and multiply to take on a life of their own."},
            {id:2,images:Avatar,title:"Kahlil Gibran",titles:"Kahlil Gibran",desc:"I slept and I dreamed that life is all joy. I woke and I saw that life is all service. I served and I saw that service is joy."}
    ]
}
    render() {
        return (
            <div>
                <div className="container">
                <h3 className="screens text-center text-uppercase">users feedbacks</h3>
                    <p className="text-center">Lorem ipsum dolor sit, amet consectetur dolor sit, amet consectetur adipisicing elit </p>.
                    <p className="text-center">Quod accusamus impedit, veritatis voluptatem.</p>

                    <div className="row">
                    {this.state.details.map(userr=>{
                            return (
                            <div className="col-md-6" key={userr.id}>
                                <div className="text-center" style={{backgroundColor:'rgb(214, 212, 212)'}}>
                                    <img src={userr.images} className="img-fluid" alt="user" style={{display:"inline-block"}}/>
                                    <h5 style={{fontWeight:"700"}}>{userr.title}</h5>
                                    <span>{userr.titles}</span>
                                    <p className="p-3">{userr.desc}</p>
                                </div> 
                           </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
