import React, { Component } from 'react';
import 'react-multi-carousel/lib/styles.css';

import colors from "../config/colors"
import img1 from "../assets/slider2.jpg"
import ProductCard from '../components/ProductCard';

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
        title: "This is vehicle",
        modelName: "Honda Civic 2019",
        price: "PKR 1,23,000",
        city: "Lahore"
    },
    {
        id: 8,
        image: img1,
        title: "This is vehicle",
        modelName: "Corola 2019",
        price: "PKR 2,23,134",
        city: "Lahore"
    },
    {
        id: 9,
        image: img1,
        title: "This is vehicle",
        modelName: "Prius 2019",
        price: "PKR 3,23,000",
        city: "Gujranwala"
    },
    {
        id: 10,
        image: img1,
        title: "This is vehicle",
        modelName: "Honda Civic 2019",
        price: "PKR 6,23,000",
        city: "Islamabad"
    },
    {
        id: 11,
        image: img1,
        title: "This is vehicle",
        modelName: "Corolla",
        price: "PKR 2,10,000",
        city: "Multan"
    },
    {
        id: 12,
        image: img1,
        title: "This is vehicle",
        modelName: "Honda Civic 2018",
        price: "PKR 1,23,000",
        city: "Sialkot"
    },
]

class SearchResult extends Component {
    render() {
        return (
            <div className="container" >
                <div className="row" >
                    <p style={{ fontSize: 30, color: colors.grayBlack, marginLeft: 13, marginTop: 50, marginBottom: 60 }} >Search Result:</p>
                </div>
                <div className="row" style={{ marginBottom: 100 }}>
                    {products.map((vehicle, i) => (
                        <div className="col-md-3" >
                            <ProductCard key={i} id={vehicle.id} image={img1} title={vehicle.title} mainHeading={vehicle.modelName} subHeading={vehicle.price} subsubHeading={vehicle.city} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default SearchResult;