import React, { Component } from 'react'
import './thirdsection.css';
import Movie from '../images/de5d3a0eff90b.png';
export default class ThirdSection extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mx-0">
                    <div className="col-md-6 apps">
                        <h1 className="about">ABOUT THE APP</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto, mollitia reiciendis vero sapiente at dolorem 
                            exercitationem accusamus esse, possimus fugit hic ipsum
                            doloribus magni repellendus sit! Illum, cum error? Nisi 
                            atque culpa architecto doloremque! At esse eum ullam aspernatur reprehenderit.
                        </p>
                        <i class="fa fa-play-circle m-2"  style={{ fontSize:'20px',color:'blue'}}  aria-hidden="true"></i>
                        <span>Watch More Videos</span>
                    </div>
                    <div className="col-md-6">
                        <img src={Movie} alt="Movie" className="img-fluid"/>            
                    </div>
                </div>
            </div>
        )
    }
}
