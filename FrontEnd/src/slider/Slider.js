import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import 'react-multi-carousel/lib/styles.css';
import Particles from 'react-particles-js'

import img3 from "../assets/hero.jpg"
import "./Slider.css"

class Slider extends Component {

    render() {
        return (
            <CardMedia
                className="sliderCard"
                image={img3}
                title="Wheels"
            >
                <div class="container" >
                    <div class="row justify-content-left">
                        <div class="col-md-6 align-self-center">
                            <Particles />
                            <h1 className="sliderMainHeading" >Find Used Cars in Pakistan</h1>
                            <h5 className="sliderSubHeading" >With thousands of cars, we have just the right one for you</h5>
                            <Particles />
                        </div>
                        <div class="col-md-6">
                            <Particles />
                        </div>
                    </div>
                </div>
                <Particles />

            </CardMedia>
        );
    }
}

export default Slider