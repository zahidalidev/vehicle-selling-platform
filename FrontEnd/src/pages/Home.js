import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import colors from "../config/colors"
import img1 from "../assets/slider2.jpg"
import ProductCard from '../components/ProductCard';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 5 // optional, default to 1.
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

class Home extends Component {
    render() {
        return (
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <ProductCard image={img1} title={"this is car"} mainHeading={"Honda"} subHeading={"subHeading"} subsubHeading={"subsubheading"} />
                <ProductCard image={img1} title={"this is car"} mainHeading={"Honda"} subHeading={"subHeading"} subsubHeading={"subsubheading"} />
                <ProductCard image={img1} title={"this is car"} mainHeading={"Honda"} subHeading={"subHeading"} subsubHeading={"subsubheading"} />
                <ProductCard image={img1} title={"this is car"} mainHeading={"Honda"} subHeading={"subHeading"} subsubHeading={"subsubheading"} />
                <ProductCard image={img1} title={"this is car"} mainHeading={"Honda"} subHeading={"subHeading"} subsubHeading={"subsubheading"} />
                <ProductCard image={img1} title={"this is car"} mainHeading={"Honda"} subHeading={"subHeading"} subsubHeading={"subsubheading"} />
            </Carousel>
        );
    }
}

export default Home;