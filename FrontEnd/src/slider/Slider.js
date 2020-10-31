import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Divider } from '@material-ui/core';
import Particles from 'react-particles-js'

import img1 from "../assets/nccvjom7pgi5jolixcza.jpg"
import img2 from "../assets/slider2.jpg"
import img3 from "../assets/hero.jpg"
import colors from '../config/colors';
import "./Slider.css"

export default class Slider extends React.Component {

    render() {
        return (
            <CardMedia
                className="sliderCard"
                image={img3}
                title="Wheels"
            >
                {/* <Divider style={{ paddingTop: 40, backgroundColor: colors.primary, borderBottom: `2px solid ${colors.secondary}` }} /> */}
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
