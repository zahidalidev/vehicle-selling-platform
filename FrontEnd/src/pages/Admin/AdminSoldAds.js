import React, { Component } from 'react';

import { CardMedia, Input } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';

import colors from '../../config/colors';
import "./Admin.css"
import profileImage from "../../assets/slider2.jpg"
import ReportProductCard from '../../components/ReportProductCard';

class AdminSoldAds extends Component {
    state = {
        ads: [
            {
                id: 1,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Honda Civic 2019",
                price: "PKR 1,23,000",
                city: "Lahore"
            },
            {
                id: 2,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Corola 2019",
                price: "PKR 2,23,134",
                city: "Lahore"
            },
            {
                id: 3,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Prius 2019",
                price: "PKR 3,23,000",
                city: "Gujranwala"
            },
            {
                id: 4,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Honda Civic 2019",
                price: "PKR 6,23,000",
                city: "Islamabad"
            },
            {
                id: 5,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Corolla",
                price: "PKR 2,10,000",
                city: "Multan"
            },
            {
                id: 6,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Honda Civic 2018",
                price: "PKR 1,23,000",
                city: "Sialkot"
            },
        ]
    }
    render() {
        const { ads } = this.state;

        return (
            <div className="row userBox2">
                <div className="col-md-12"  >
                    <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                        <h1> Sold Ads</h1>
                    </div>
                </div>

                <div className="col-md-12" style={{ marginTop: 80, marginBottom: 30 }}>
                    <div className="row" >
                        <div className="col-md-1" ></div>
                        <div className="col-md-6" style={{ justifyContent: "center", alignContent: "center" }} >
                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                <div className="col-md-4" >
                                    <h5 style={{ marginLeft: -20, fontSize: 25, whiteSpace: "nowrap" }} >Vehicle Name</h5>
                                </div>
                                <div className="col-md-4" >
                                    <h5 style={{ marginLeft: 25, fontSize: 25, whiteSpace: "nowrap" }} >Price</h5>

                                </div>
                                <div className="col-md-4" >
                                    <h5 style={{ marginLeft: 50, fontSize: 25, whiteSpace: "nowrap" }} >City</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" >
                            <h5 style={{ marginLeft: 80, fontSize: 25, whiteSpace: "nowrap" }} >Seller</h5>

                        </div>
                        <div className="col-md-2" >
                            <h5 style={{ marginLeft: 10, fontSize: 25, whiteSpace: "nowrap" }} >Sold Date</h5>

                        </div>
                    </div>
                </div>

                <div className="col-md-12" >

                    <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                        {ads.map((ad, i) => (
                            <ReportProductCard
                                image={ad.image}
                                title={ad.modelName}
                                mainHeading={ad.modelName}
                                subHeading={ad.price}
                                subsubHeading={ad.city}
                                id={i}
                                sellerName="Ahmad Bilal"
                                soldDate="25-02-2020"
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminSoldAds;