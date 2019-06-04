import React, { Component } from 'react'
import './recentblog.css'
import User from '../images/user.png';
import {Card} from 'react-bootstrap'
export default class Recentblog extends Component {
    state={details:[
        {id:1,images:User,titles:"Dalai Lama XIV",desc:"My religion is very simple. My religion is kindness"},
        {id:2,images:User,titles:"Sophocles",desc:"One who knows how to show and to accept kindness will be a friend better than any possession"},
        {id:3,images:User,titles:"Abraham Joshua Heschel",desc:"When I was young, I used to admire intelligent people; as I grow older, I admire kind people"}
    ]}
    render() {
        return (
            <div>
                <div className="container">
                <h3 className="screens text-center text-uppercase">recent blog</h3>
                    <p className="text-center">Lorem ipsum dolor sit, amet consectetur dolor sit, amet consectetur adipisicing elit </p>.
                    <p className="text-center">Quod accusamus impedit, veritatis voluptatem.</p>
                    <div className="row">
                        {this.state.details.map(items=>{
                            return(
                                <div className="col-md-4 py-3">
                                    <div className="centering">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={User} />
                                        <Card.Body>
                                            <Card.Title>{items.titles}</Card.Title>
                                            <Card.Text>{items.desc}</Card.Text>
                                        </Card.Body>
                                    </Card>
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
