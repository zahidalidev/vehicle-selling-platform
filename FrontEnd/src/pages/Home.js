import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import '../../node_modules/react-multi-carousel/lib/styles.css';

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

const products = [
    {
        id: 1,
        image: img1,
        title: "This is vehicle",
        modelName: "Honda Civic 2019",
        price: "PKR 1,23,000",
        city: "Lahore"
    },
    {
        id: 2,
        image: img1,
        title: "This is vehicle",
        modelName: "Corola 2019",
        price: "PKR 2,23,134",
        city: "Lahore"
    },
    {
        id: 3,
        image: img1,
        title: "This is vehicle",
        modelName: "Prius 2019",
        price: "PKR 3,23,000",
        city: "Gujranwala"
    },
    {
        id: 4,
        image: img1,
        title: "This is vehicle",
        modelName: "Honda Civic 2019",
        price: "PKR 6,23,000",
        city: "Islamabad"
    },
    {
        id: 5,
        image: img1,
        title: "This is vehicle",
        modelName: "Corolla",
        price: "PKR 2,10,000",
        city: "Multan"
    },
    {
        id: 6,
        image: img1,
        title: "This is vehicle",
        modelName: "Honda Civic 2018",
        price: "PKR 1,23,000",
        city: "Sialkot"
    },
    {
        id: 7,
        image: img1,
        title: "This is vehicle_7",
        modelName: "Honda Civic 2018",
        price: "PKR 1,23,000",
        city: "Sialkot"
    },
]
class Home extends Component {
    render() {
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
                        {products.map((vehicle, i) => (
                            <ProductCard key={i} id={vehicle.id} image={img1} title={vehicle.title} mainHeading={vehicle.modelName} subHeading={vehicle.price} subsubHeading={vehicle.city} />
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
                            {products.map((vehicle, i) => (
                                <ProductCard key={i} id={vehicle.id} image={img1} title={vehicle.title} mainHeading={vehicle.modelName} subHeading={vehicle.price} subsubHeading={vehicle.city} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;