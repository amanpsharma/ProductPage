import React, { Component } from 'react'
import './popular.css'
import Mobiles from '../images/screens.jpg';
export default class Popular extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="screens text-center text-uppercase">popular faq's</h3>
                    <p className="text-center">Lorem ipsum dolor sit, amet consectetur dolor sit, amet consectetur adipisicing elit </p>.
                    <p className="text-center">Quod accusamus impedit, veritatis voluptatem.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Mobiles} alt="Mobiles" className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <div class="dropdown">
                                <button class="btn btn-default dropdown-toggle" style={{backgroundColor:'rgb(214, 212, 212)'}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Are You able to Edit This Pages
                                </button>
                            </div><br/>
                            <div class="dropdown">
                                <button class="btn btn-default dropdown-toggle" style={{backgroundColor:'rgb(214, 212, 212)'}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Are You able to Edit This Pages             
                                </button>
                            </div><br/>
                            <div class="btn-group dropright">
                                <button type="button" style={{backgroundColor:'rgb(214, 212, 212)'}} class="btn btn-secondary dropdown-toggle dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </button>
                                <div class="dropdown-menu">
                                </div>
                            </div> <br/><br/>
                            <div class="dropdown">
                                <button class="btn btn-default dropdown-toggle" style={{backgroundColor:'rgb(214, 212, 212)'}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Are You able to Edit This Pages
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
