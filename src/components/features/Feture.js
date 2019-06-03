import React, { Component } from 'react'
import './feature.css'
import Mobile from '../images/de5d3a0eff90b.png';
export default class Feture extends Component {
    state={
        details:[
            {id:1,icon:"fa fa-mobile p-1",title:"Best App Screen",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quidem."},
            {id:1,icon:"fa fa-desktop p-1",title:"Best App Screen",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quidem."},
            {id:1,icon:"fa fa-home p-1",title:"Best App Screen",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quidem."},
            {id:1,icon:"fa fa-mobile p-1",title:"Best App Screen",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quidem."},
            {id:1,icon:"fa fa-mobile p-1",title:"Best App Screen",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quidem."},
            {id:1,icon:"fa fa-mobile p-1",title:"Best App Screen",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quidem."},
            
        ]
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 p-5" style={{position:'relative'}}>
                            <img src={Mobile} alt="Mobile" className="img-fluid mobiles"/>               
                        </div>
                        <div className="col-md-8 p-5">
                            
                            <h1>BEST FEATURE</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nisi cupiditate iusto adipisci necessitatibus unde 
                                reprehenderit omnis amet quasi suscipit delectus?
                            </p>
                            <div className="row">
                                {this.state.details.map(item=>{
                                    return(
                                        <div className="col-md-6">
                                            <i className={item.icon} aria-hidden="true" style={{ fontSize:'40px',color:'blue'}}></i>
                                            <span className="p-2" style={{fontWeight:'bold'}}>{item.title}</span>
                                            <p>{item.des}</p>
                                        </div>
                                    )
                                })}
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
