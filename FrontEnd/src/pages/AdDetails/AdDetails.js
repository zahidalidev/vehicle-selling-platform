import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import ReactImageMagnify from 'react-image-magnify';
import 'bootstrap/dist/css/bootstrap.min.css';

// import StarRatings from "react-star-ratings";
import colors from "../../config/colors"
import "./AdDetails.css"

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
        marginTop: 50,
        cursor: 'pointer',
        marginLeft: 39
    },
}));



const onSelectProduct = {
    id: "5b7daff6fd5cb23999893543",
    vehicleName: "Toyota Prius E 2019",
    registrationYear: 2019,
    city: "Lahore",
    mileage: "200KM",
    exteriorColor: "red",
    vehicleModel: "LAh 4123",
    vehicleDescription: "lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm",
    sellingPrice: "PKR 79.5 lacs",
    vehicleStatus: "good",
    adStatus: "Publish",
    engine: "Autoamtice",
    date: "25 Nov 2010",
    pictures: [
        "https://i.pinimg.com/originals/42/2b/15/422b15d47b9a0d7eb271011b95498bf2.jpg",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg?itok=QTxMln2k",
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/7636/1584075934787/front-left-side-47.jpg",
        "https://images.carandbike.com/car-images/large/bmw/z4/bmw-z4.jpg?v=29"
    ],
    category: "Category",
    fullName: "Zahid Ali",
    email: "m.zahidalidev@gmail.com",
    contactNumber: "03367088018",
    fullAddress: "Shah Faisal Colony, Lahore"
}


export default function AdDetails(props) {

    const classes = useStyles();

    const [originalImage, setOriginalImage] = React.useState(onSelectProduct.pictures[0]);

    // like componentDidMount() in class
    useEffect(() => {
        console.log("Vehicle ID: ", props.match.params.vehicleId)  //getting vehicle ID from URL
    })

    const handleImage = (picture) => {
        setOriginalImage(picture);
    }

    return (
        <>
            <Card elevation={0} style={{ marginTop: 140 }} className={classes.pictureCardStyle}>
                <div className="row" style={{ marginLeft: 20 }} >
                    <div className="col-md-8" style={{ zIndex: 1 }} >
                        <h3 style={{ color: colors.darkBlue }} >{onSelectProduct.vehicleName}</h3>
                        <h6 style={{ color: "#27a6d3", marginBottom: 30 }} >{onSelectProduct.fullAddress}</h6>
                        <span>
                            <ReactImageMagnify style={{ boxShadow: `0.5px 0.5px 4px 4px ${colors.darkGray}` }}  {...{
                                smallImage: {
                                    alt: 'Auto Zone',
                                    src: originalImage,
                                    width: 661,
                                    height: 500,
                                },
                                largeImage: {
                                    alt: '',
                                    src: originalImage,
                                    width: 1800,
                                    height: 1500,
                                }
                            }} />
                        </span>
                    </div>
                    {/* other images */}
                    <div className="row" style={{ marginRight: 247, marginTop: -21, marginBottom: 52, marginLeft: -37 }}  >
                        {onSelectProduct.pictures.map((picture, i) =>
                            <div className="col-md-2 d-flex justify-content-start" key={i}>
                                <ButtonBase
                                    key={i}
                                    onClick={() => handleImage(picture)}
                                >
                                    <CardMedia
                                        key={i}
                                        className={classes.bottomSmall}
                                        image={picture}
                                        title={onSelectProduct.vehicleName}
                                    />
                                </ButtonBase>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row detailsRightContainer">
                    <div className="col-md-9 contactContainer" style={{ boxShadow: `0.5px 0.5px 4px 4px ${colors.lightGray}` }} >
                        <div className="sol-md-7 ">
                            <h3 className="detailsSellPrice" style={{ color: colors.primary }} >{onSelectProduct.sellingPrice}</h3>
                        </div>
                        <div className="sol-md-7" >
                            <h4 className="detailsContact" style={{ color: colors.white, backgroundColor: colors.primary }}>{onSelectProduct.contactNumber}</h4>
                        </div>
                    </div>

                    <div className="col-md-9 selllerInfo" style={{ marginTop: -60, boxShadow: `0.5px 0.5px 4px 4px ${colors.lightGray}` }} >
                        <div className="sol-md-7 ">
                            <p className="sellerInfo" style={{ color: colors.black }} >Seller Information</p>
                        </div>
                        <div style={{ margin: 40, marginTop: 30 }} >
                            <div className="sol-md-7" >
                                <p className="" style={{ color: colors.black }}><span style={{ fontWeight: "bold" }} >Name: </span>{onSelectProduct.fullName}</p>
                            </div>
                            <div className="sol-md-7" >
                                <p className="" style={{ color: colors.black }}><span style={{ fontWeight: "bold" }} >Contact Number: </span>{onSelectProduct.contactNumber}</p>
                            </div>
                            <div className="sol-md-7" >
                                <p className="" style={{ color: colors.black }}><span style={{ fontWeight: "bold" }} >Email Address: </span>{onSelectProduct.email}</p>
                            </div>
                            <div className="sol-md-7" >
                                <p className="" style={{ color: colors.black }}><span style={{ fontWeight: "bold" }} >Full Address: </span>{onSelectProduct.fullAddress}</p>
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
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >City: </span>{onSelectProduct.city}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Registration Year: </span>{onSelectProduct.registrationYear}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Vehicle Mpdel: </span>{onSelectProduct.vehicleModel}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row" >
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Mileage: </span>{onSelectProduct.mileage}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Exterior Color: </span>{onSelectProduct.exteriorColor}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Vehicle Status: </span>{onSelectProduct.vehicleStatus}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row" >
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Engine: </span>{onSelectProduct.engine}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30, marginRight: 60 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Price: </span>{onSelectProduct.sellingPrice}</p>
                        </div>
                        <div className="sol-md-6" >
                            <p className="" style={{ color: colors.black, marginLeft: 30 }}><span style={{ fontWeight: "bold", marginRight: 50 }} >Description: </span>{onSelectProduct.vehicleDescription}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
}