import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import { toast } from 'react-toastify';
import '../../node_modules/react-multi-carousel/lib/styles.css';
import http from '../config/http';

import img1 from "../assets/slider2.jpg"
import ProductCard from '../components/ProductCard';
import { getAllAds } from '../http/api';

const endPoint = http.apiEndPoint;

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
        const { onAds1: ads1, onAds2: ads2 } = this.props;
        return (
            <div style={{ marginLeft: -14, marginRight: -14, marginBottom: 100 }}>
                <div style={{ marginLeft: 90, marginRight: 50, marginBottom: 100 }} >
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
                        {ads1.map((vehicle, i) => (
                            <ProductCard key={i} id={vehicle._id} image={`${endPoint}/${vehicle.images[0]}`} title={vehicle.vehicleName} mainHeading={`${vehicle.vehicleName} ${vehicle.vehicleModel}`} subHeading={vehicle.sellingPrice} subsubHeading={vehicle.city} />
                        ))}
                    </Carousel>
                </div>
                <div style={{ backgroundColor: "#f2f3f3", width: "100%", padding: 10 }} >
                    <div style={{ marginLeft: 90, marginRight: 50, marginTop: 50, marginBottom: 50 }} >
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
                            {ads2.map((vehicle, i) => (
                                <ProductCard key={i} id={vehicle._id} image={`${endPoint}/${vehicle.images[0]}`} title={vehicle.vehicleName} mainHeading={`${vehicle.vehicleName} ${vehicle.vehicleModel}`} subHeading={vehicle.sellingPrice} subsubHeading={vehicle.city} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;