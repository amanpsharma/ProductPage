import React, { Component } from 'react'
import './happyuser.css'

export default class Happyuser extends Component {
    state={
        details:
        [
            {id:1,icon:'fa fa-heart',values:'100K',desc:'Happy Users'},
            {id:1,icon:'fa fa-pencil-square-o',values:'310',desc:'Free Updates'},
            {id:1,icon:'fa fa-coffee',values:'778',desc:'Cup Coffee'},
            {id:1,icon:'fa fa-meetup',values:'18',desc:'Meet Up'}
        ]
}
    render() {
        return (
            <div className="happy">
                <div className="container">
                    <div className="row">
                    {this.state.details.map(item=>{
                        return(
                            <div className="col-sm-6 col-md-3 py-5">
                               <div className="centering">
                                <i className={item.icon} style={{ fontSize:'30px',color:"white"}} aria-hidden="true"/>
                                <br/>
                                        <h3 style={{color:"white"}} className="mb-0">{item.values}</h3>
                                        <p style={{color:"white"}} className="mb-0">{item.desc}</p>
                               </div>
                                    
                        
                            </div>
                        )
                    })}
                       
                </div>
            </div>
            </div>
        )
    }
}
