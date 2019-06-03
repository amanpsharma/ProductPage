import React, { Component } from 'react'
import './firstCard.css';
import {Card} from 'react-bootstrap';
export default class FirstCard extends Component {
    render() {
        return (
            <div className="container cards">
                <div className="row">
                    <div className="col-md-4">
                        <Card className="m-5" style={{ width: '18rem', backgroundColor:'#673ab7', border:'none',color:'white'}}>
                        <i class="fa fa-database text-center m-2" style={{ fontSize:'50px'}} aria-hidden="true"></i>
                        <Card.Body>
                            <Card.Title className="text-center">Awesome Layouts</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className="m-5" style={{ width: '18rem', backgroundColor:'#673ab7', border:'none',color:'white' }}>
                        <i class="fa fa-deaf text-center m-2" style={{ fontSize:'50px'}} aria-hidden="true"></i>
                        <Card.Body>
                            <Card.Title className="text-center">Useful Features</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className="m-5" style={{ width: '18rem', backgroundColor:'#673ab7', border:'none',color:'white' }}>
                        <i class="fa fa-desktop text-center m-2" style={{ fontSize:'50px'}} aria-hidden="true"></i>
                        <Card.Body>
                            <Card.Title className="text-center">Resposible Layout</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
