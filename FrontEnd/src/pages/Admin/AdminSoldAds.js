import React, { Component } from 'react';

import { CardMedia, Input } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import { toast } from 'react-toastify';

import colors from '../../config/colors';
import "./Admin.css"
import profileImage from "../../assets/slider2.jpg"
import ReportProductCard from '../../components/ReportProductCard';
import ProductCardListAdmin from '../../components/ProductCardListAdmin';
import { getAllAds } from '../../http/api';
import { addSeconds } from 'date-fns/fp';
import http from '../../config/http';

const endPoint = http.apiEndPoint;

class AdminSoldAds extends Component {
    state = {
        ads: []
    }

    componentDidMount = async () => {
        try {
            const { data: ads } = await getAllAds()
            console.log(ads)
            this.setState({ ads })
        } catch (error) {
            toast.error("Loading Ads Error")
        }
    }


    render() {
        const { ads } = this.state;

        return (
            <div className="row userBox2">
                <div className="col-md-12"  >
                    <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                        <h1> All Ads</h1>
                    </div>
                </div>



                <div className="col-md-12" >

                    <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                        {ads.map((ad, i) => (
                            <ProductCardListAdmin
                                image={`${endPoint}/${ad.images[0]}`}
                                title={ad.vehicleName}
                                mainHeading={ad.vehicleName}
                                subHeading={ad.sellingPrice}
                                subsubHeading={ad.city}
                                adID={ad._id}
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