import React, { Component } from 'react'
import './happyuser.css'
import {Card} from 'react-bootstrap';

export default class Happyuser extends Component {
    state={
        details:
        [
            {id:1,icon:'fa fa-heart',values:'100K',desc:'Happy Users'},
            {id:1,icon:'fa fa-heart',values:'310',desc:'Free Updates'},
            {id:1,icon:'fa fa-heart',values:'778',desc:'Cup Coffee'},
            {id:1,icon:'fa fa-heart',values:'18',desc:'Meet Up'}
        ]
}
    render() {
        return (
            <div className="happy">
                <div className="container">
                    <div className="row">
                    {this.state.details.map(item=>{
                        return(
                            <div className="col-md-3">
                                <Card className="p-5" style={{ width: '18rem', backgroundColor:'blue', border:'none',color:'white'}}>
                                    <i className={item.icon} style={{ fontSize:'30px', lineHeight:'1px',textAlign:'center'}} aria-hidden="true"></i>
                                    <Card.Body>
                                        <Card.Title className="text-center">{item.values}</Card.Title>
                                        <Card.Text className="text-center">{item.desc}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                       
                </div>
            </div>
            </div>
        )
    }
}
