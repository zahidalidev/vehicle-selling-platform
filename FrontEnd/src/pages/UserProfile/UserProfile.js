import React, { Component } from 'react';

import { CardMedia, Input } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';

import colors from '../../config/colors';
import "./UserProfile.css"
import profileImage from "../../assets/slider2.jpg"
import ProductCardList from '../../components/ProductCardList';

class UserProfile extends Component {

    state = {
        ads: [
            {
                image: profileImage,
                title: "Honda city",
                mainHeading: "Honda city",
                subHeading: "PKR 200,000",
                subsubHeading: "sub sub",
            },
            {
                image: profileImage,
                title: "Honda city",
                mainHeading: "Honda city",
                subHeading: "PKR 200,000",
                subsubHeading: "sub sub",
            },
            {
                image: profileImage,
                title: "Honda city",
                mainHeading: "Honda city",
                subHeading: "PKR 200,000",
                subsubHeading: "sub sub",
            },
            {
                image: profileImage,
                title: "Honda city",
                mainHeading: "Honda city",
                subHeading: "PKR 200,000",
                subsubHeading: "sub sub",
            },
        ]
    }
    render() {

        const { ads } = this.state;

        return (
            <div style={{ width: "98.5%" }} >
                <div className="row userBox">
                    <div className="col-md-7">
                        <CardMedia
                            component="img"
                            alt="Vehicle"
                            height="500"
                            image={profileImage}
                            style={{ padding: 20, borderRadius: 30 }}

                        />
                    </div>
                    <div className="col-md-5" style={{ justifyContent: "center" }}>
                        <div className="row" style={{ justifyContent: "center", marginTop: 50 }} >
                            <h1>Zahid Ali <CreateIcon color="primary" style={{ marginLeft: 10, marginBottom: 10 }} /></h1>
                            {/* { <Input
                                value="Zahid Ali"
                                style={{ fontSize: 40, width: 300 }}
                            />
                            <DoneIcon color="primary" style={{ fontSize: 32, marginTop: 14 }} />} */}

                        </div>
                        <div className="row" style={{ justifyContent: "center", marginTop: 50 }} >
                            <h5> Email: m.zahidalidev@gmail.com <CreateIcon color="primary" style={{ marginLeft: 10, marginBottom: 10 }} /></h5>
                            {/* { <Input
                                value="Zahid Ali"
                                style={{ fontSize: 40, width: 300 }}
                            />
                            <DoneIcon color="primary" style={{ fontSize: 32, marginTop: 14 }} />} */}

                        </div>
                        <div className="row" style={{ justifyContent: "center" }} >
                            <h5> Contact Number: +92-336-7088018 <CreateIcon color="primary" style={{ marginLeft: 10, marginBottom: 10 }} /></h5>
                            {/* { <Input
                                value="Zahid Ali"
                                style={{ fontSize: 40, width: 300 }}
                            />
                            <DoneIcon color="primary" style={{ fontSize: 32, marginTop: 14 }} />} */}

                        </div>
                        <div className="row" style={{ justifyContent: "center" }} >
                            <h5>Password: thisispassword <CreateIcon color="primary" style={{ marginLeft: 10, marginBottom: 10 }} /></h5>
                            {/* { <Input
                                value="Zahid Ali"
                                style={{ fontSize: 40, width: 300 }}
                            />
                            <DoneIcon color="primary" style={{ fontSize: 32, marginTop: 14 }} />} */}

                        </div>
                        <div className="row" style={{ justifyContent: "center" }} >
                            <h5>Address: Satelite town Gujranwala <CreateIcon color="primary" style={{ marginLeft: 10, marginBottom: 10 }} /></h5>
                            {/* { <Input
                                value="Zahid Ali"
                                style={{ fontSize: 40, width: 300 }}
                            />
                            <DoneIcon color="primary" style={{ fontSize: 32, marginTop: 14 }} />} */}

                        </div>
                    </div>


                </div>
                <div className="row userBox2">
                    <div className="col-md-12"  >
                        <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                            <h1> All Ads</h1>
                        </div>
                    </div>

                    <div className="col-md-12" >

                        <div className="row" style={{ justifyContent: "center", alignContent: "center", marginTop: 100 }} >
                            {ads.map((ad, i) => (
                                <ProductCardList
                                    image={ad.image}
                                    title={ad.title}
                                    mainHeading={ad.mainHeading}
                                    subHeading={ad.subHeading}
                                    subsubHeading={ad.subsubHeading}
                                    id={i}
                                />
                            ))
                            }
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default UserProfile;