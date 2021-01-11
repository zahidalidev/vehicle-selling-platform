import React, { Component } from 'react';
import '../..//node_modules/react-multi-carousel/lib/styles.css';
import http from '../config/http';

import colors from "../config/colors"
import img1 from "../assets/slider2.jpg"
import ProductCard from '../components/ProductCard';

const endPoint = http.apiEndPoint;

class SearchResult extends Component {
    render() {
        const { onSearchResult } = this.props;
        return (
            <div className="container" >
                <div className="row" >
                    <p style={{ fontSize: 30, color: colors.grayBlack, marginLeft: 13, marginTop: 50, marginBottom: 60 }} >Search Result:</p>
                </div>
                <div className="row" style={{ marginBottom: 100 }}>
                    {onSearchResult.map((vehicle, i) => (
                        <div className="col-md-3" >
                            <ProductCard key={i} id={vehicle._id} image={`${endPoint}/${vehicle.images[0]}`} title={vehicle.vehicleName} mainHeading={vehicle.vehicleName + ' ' + vehicle.vehicleModel} subHeading={vehicle.sellingPrice} subsubHeading={vehicle.city} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default SearchResult;