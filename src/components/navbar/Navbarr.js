import React, { Component } from 'react'
import './navbar.css';
import {Nav,NavDropdown,Navbar} from 'react-bootstrap';
export default class Navbarr extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home">
                    <i class="fa fa-product-hunt" aria-hidden="true" style={{fontSize:'2rem'}}></i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                       
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </div>
        )
    }
}
