import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from "../assets/nccvjom7pgi5jolixcza.jpg"
import img2 from "../assets/slider2.jpg"

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
                    autoPlaySpeed={3000}
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
                            style={{ height: window.innerWidth > 767 ? '650px' : '300px' }}
                            image={sliderImage}
                            title="Wheels"
                        >
                            <div style={{
                                backgroundImage: "linear-gradient(180deg, black, rgba(27, 53, 114, 0))",
                                width: "100%",
                                height: window.innerWidth > 767 ? '650px' : '300px',
                                opacity: 0.9
                            }} ></div>

                        </CardMedia>
                    )}
                </Carousel>
            </div>
        );
    }
}
