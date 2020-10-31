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
import colors from '../config/colors';
import "./Slider.css"

export default class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            curTime: 0,
            images: [img1, img2]
        }
    }

    responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            // slidesToSlide: 3 // optional, default to 1.
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    tick = () => {
        this.setState({ curTime: this.state.curTime + 1 });
    }
    componentDidMount() {
        setInterval(() => {
            if (this.state.curTime === 3) {
                this.setState({ curTime: 0 })
            }
            this.tick()
        }, 1000)
    }
    render() {
        return (
            <div>
                <Carousel
                    responsive={this.responsive}
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="transform 600ms ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    focusOnSelect={true}
                >
                    {this.state.images.map(sliderImage =>
                        <CardMedia
                            className="sliderCard"
                            image={sliderImage}
                            title="Wheels"
                        >
                            <div className="sliderLayer" >
                                <Divider style={{ paddingTop: 40, backgroundColor: "black", borderBottom: `1px solid ${colors.primaryLight}` }} />
                                <div class="container" style={{ marginTop: window.innerWidth > 767 ? '310px' : '140px' }}>
                                    <div class="row justify-content-center">
                                        {/* <div class="col-md-3">
                                        </div> */}
                                        <div class="col-md-6">
                                            <Particles />
                                        </div>
                                        <div class="col-md-6 align-self-center">
                                            <h1 className="sliderMainHeading" >Find Used Cars in Pakistans</h1>
                                            <h5 className="sliderSubHeading" >With thousands of cars, we have just the right one for you</h5>
                                            <Particles />
                                        </div>
                                    </div>
                                </div>
                                <Particles />
                            </div>

                        </CardMedia>
                    )}
                </Carousel>
            </div>
        );
    }
}
