import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import ReactImageMagnify from 'react-image-magnify';
import 'bootstrap/dist/css/bootstrap.min.css';
import http from '../../config/http';


// import StarRatings from "react-star-ratings";
import colors from "../../config/colors"
import "./AdDetails.css"
import { toast } from 'react-toastify';
import { getAdOwner, getAdsDetail } from '../../http/api';

const endPoint = http.apiEndPoint;

const useStyles = makeStyles((theme) => ({
    pictureCardStyle: {
        display: 'flex',
        backgroundColor: "white",
        marginLeft: 70
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },

    bottomSmall: {
        width: 70,
        height: 70,
        marginTop: 0,
        cursor: 'pointer',
        marginLeft: 0
    },
}));



export default function AdDetails(props) {

    const classes = useStyles();

    const [adDetails, setAdDetails] = useState({ images: [] })
    const [originalImage, setOriginalImage] = React.useState(adDetails.images[0]);
    const [adOwner, setAdOwner] = React.useState({});

    const getUserDetail = async (id) => {
        // console.log()
        try {
            const { data } = await getAdOwner(id);
            setAdOwner(data)
            console.log(data)
        } catch (error) {
            toast.error('User detail error')
        }
    }

    const getAdDetails = async () => {
        try {
            const _id = props.match.params.vehicleId;
            const { data } = await getAdsDetail(_id);

            let adDetail = data;
            for (let j = 0; j <= adDetail.images.length - 1; j++) {
                adDetail.images[j] = `${endPoint}/${adDetail.images[j]}`
                adDetail.images[j] = adDetail.images[j].replace('images\\', 'images/')
            }

            setOriginalImage(adDetail.images[0])
            setAdDetails(adDetail)
            return adDetail.userID

        } catch (error) {
            toast.error("Ad Details Error")
        }
    }

    // like componentDidMount() in class
    useEffect(async () => {
        const id = await getAdDetails();
        await getUserDetail(id)
    }, [])

    const handleImage = (picture) => {
        setOriginalImage(picture);
    }

    return (
        <>
            <Card elevation={0} style={{ marginTop: 140 }} className={classes.pictureCardStyle}>
                <div className="row" style={{ marginLeft: 20 }} >
                    <div className="col-md-8" style={{ zIndex: 1 }} >
                        <h3 style={{ color: colors.darkBlue }} >{`${adDetails.vehicleName} ${adDetails.vehicleModel}`}</h3>
                        <h6 style={{ color: "#27a6d3", marginBottom: 30 }} >{adOwner.fullAddress}</h6>
                        <span>
                            <ReactImageMagnify style={{ boxShadow: `0.5px 0.5px 4px 4px ${colors.darkGray}` }}  {...{
                                smallImage: {
                                    alt: 'Auto Zone',
                                    src: originalImage,
                                    width: 561,
                                    height: 500,
                                },
                                largeImage: {
                                    alt: 'Auto Zone',
                                    src: originalImage,
                                    width: 1800,
                                    height: 1500,
                                }
                            }} />
                        </span>
                    </div>
                    {/* other images */}
                    <div className="row" style={{ marginRight: 247, marginTop: -21, marginBottom: 52, marginLeft: -37 }}  >
                        {adDetails.images.map((picture, i) =>
                            <div className="col-md-2 d-flex justify-content-start" key={i}>
                                {/* {console.log(picture)} */}
                                <ButtonBase
                                    style={{ marginLeft: 37, marginRight: 111, marginTop: 38, marginBottom: 34, cursor: 'pointer' }}
                                    key={i}
                                    onClick={() => handleImage(picture)}
                                >
                                    <CardMedia
                                        key={i}
                                        className={classes.bottomSmall}
                                        image={picture}
                                        title={adOwner.vehicleName}
                                    />
                                </ButtonBase>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row detailsRightContainer">
                    <div className="col-md-9 contactContainer" style={{ boxShadow: `0.5px 0.5px 4px 4px ${colors.lightGray}` }} >
                        <div className="sol-md-7 ">
                            <h3 className="detailsSellPrice" style={{ color: colors.primary }} >{adDetails.sellingPrice}</h3>
                        </div>
                        <div className="sol-md-7" >
                            <h4 className="detailsContact" style={{ color: colors.white, backgroundColor: colors.primary }}>{adOwner.contactNumber}</h4>
                        </div>
                    </div>

                    <div className="col-md-9 selllerInfo" style={{ marginTop: -60, boxShadow: `0.5px 0.5px 4px 4px ${colors.lightGray}` }} >
                        <div className="sol-md-7 ">
                            <p className="sellerInfo" style={{ color: colors.black }} >Seller Information</p>
                        </div>
                        <div style={{ margin: 40, marginTop: 30, overflow: 'auto' }} >
                            <div className="sol-md-7" >
                                <p className="" style={{ color: colors.black }}><span style={{ fontWeight: "bold" }} >Name: </span>{adOwner.fullName}</p>
                            </div>
                            <div className="sol-md-7" >
                                <p className="" style={{ color: colors.black }}><span style={{ fontWeight: "bold" }} >Contact Number: </span>{adOwner.contactNumber}</p>
                            </div>
                            <div className="sol-md-7" >
                                <p className="" style={{ color: colors.black }}><span style={{ fontWeight: "bold" }} >Email Address: </span>{adOwner.email}</p>
                            </div>
                            <div className="sol-md-7" >
                                <p style={{ color: colors.black }}><span style={{ fontWeight: "bold" }} >Full Address: </span>{adOwner.fullAddress}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <div className="col-md-12 vehicleFeatures" style={{ marginTop: 10, boxShadow: `0.3px 0.3px 2px 2px ${colors.lightGray}` }} >
                <div className="sol-md-12 ">
                    <p className="vehicleFeature" style={{ color: colors.black }} >Features</p>
                </div>
                <div style={{ margin: 50, marginTop: 30 }} >
                    <div className="row" >
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >City: </span>{adDetails.city}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Registration Year: </span>{adDetails.registrationYear}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Vehicle Mpdel: </span>{adDetails.vehicleModel}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row" >
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Mileage: </span>{adDetails.mileage}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Exterior Color: </span>{adDetails.exteriorColour}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Vehicle Status: </span>{adDetails.vehicleStatus}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row" >
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Engine: </span>{adDetails.engine}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Price: </span>{adDetails.sellingPrice}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Description: </span>{adDetails.vehicleDescription}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
}