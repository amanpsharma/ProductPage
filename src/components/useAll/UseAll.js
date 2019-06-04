import React, { Component } from 'react'
import './useAll.css'
import Mobiles from '../images/mobileuser.png';
export default class UseAll extends Component {
    state={details:[
        {id:1,icon:"fa fa-mobile p-1",title:"100% Responsive",desc:"Quickly change the weight (boldness) of text or italicize text"},
        {id:1,icon:"fa fa-home p-1",title:"Number 1 App",desc:"Quickly change the weight (boldness) of text or italicize text"},
        {id:1,icon:"fa fa-heart p-1",title:"Resnable Price",desc:"Quickly change the weight (boldness) of text or italicize text"},
        {id:1,icon:"fa fa-car p-1",title:"Awesome UI & UX",desc:"Quickly change the weight (boldness) of text or italicize text"},
        {id:1,icon:"fa fa-signal p-1",title:"Clean Design",desc:"Quickly change the weight (boldness) of text or italicize text"},
        {id:1,icon:"fa fa-laptop p-1",title:"Pixel Perfect",desc:"Quickly change the weight (boldness) of text or italicize texte"},
        {id:1,icon:"fa fa-tv p-1",title:"Best team",desc:"Quickly change the weight (boldness) of text or italicize texte"},
        {id:1,icon:"fa fa-mobile p-1",title:"24X7 Supports",desc:"Quickly change the weight (boldness) of text or italicize texte"}
    ]}
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={Mobiles} alt="Mobiles" className="img-fluid"/>
                    </div>
                    <div className="col-md-8 p-5">
                        <h2 className="font-weight-bold">USE IT AND MAKE YOUR APP</h2>
                        <h2 className="font-weight-bold">EASY TO USE FOR ALL</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque tenetur 
                            optio repudiandae ipsum fuga tempora mollitia maxime pariatur, quaerat 
                            voluptates sapiente labore, dolorem, autem sit.</p>
                            <div className="row">
                                {this.state.details.map(item=>{
                                    return(
                                        <div className="col-md-6">
                                            <i className={item.icon} aria-hidden="true" style={{ fontSize:'40px',color:'blue'}}></i>
                                            <span className="p-2" style={{fontWeight:'bold'}}>{item.title}</span>
                                        <p>{item.desc}</p>
                                </div>        
                                    )
                                })}
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
