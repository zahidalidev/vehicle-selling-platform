import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';

import 'bootstrap/dist/css/bootstrap.min.css';
// import StarRatings from "react-star-ratings";
import _ from "lodash";
import { Link } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
import colors from "../../config/colors"

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
    "id": "5b7daff6fd5cb23999893543",
    "vendor_id": 1,
    "index": 0,
    "picture": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/7636/1584075934787/front-left-side-47.jpg",
    "pictures": [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/7636/1584075934787/front-left-side-47.jpg",
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/7636/1584075934787/front-left-side-47.jpg",
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/7636/1584075934787/front-left-side-47.jpg",
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/7636/1584075934787/front-left-side-47.jpg"
    ],
    "price": 9201,
    "color": ["black", "Green", "blue"],
    "stock": 10,
    "type": "T-Shirt",
    "gender": "female",
    "title": "sit anim Lorem",
    "company": "pantaloons",
    "about": "Mollit ut qui duis qui duis. Incididunt commodo aliquip nisiprehenderit fugiat eu duis dolore veniam reprehenderit incididunt anim eu ullamco ipsum aute magna aliquip. Consectetur anim qui sunt cupidatat incididunt esse tempor. Eiusmod ut quis cupidatat do esse esse officia.\r\n",
    "relatedProducts": [],
    "reviews": [
        {
            "totalRating": 7, "ratings": 2, "comments": [
                { "email": "engrzahid612@gmail.com", "fullName": "Zahid Ali", "ratingStar": 4, "comment": "Incididunt commodo aliquip nisiprehenderit fugiat eu duis dolore veniam reprehenderi" },
                { "email": "mrfixerfix@gmail.com", "fullName": "Mr Fixer", "ratingStar": 3, "comment": "Incididunt hajlh to aliquip nisiprehenderit fugiat eu duis dolore veniam reprehenderi" }
            ]
        }
    ]
}


export default function AdDetails(props) {


    const classes = useStyles();
    const theme = useTheme();

    const [rating, setRating] = React.useState(0);
    const [review, setReview] = React.useState("");

    const changeRating = (newRating, name) => {
        setRating(newRating);
    }
    const handelChangeReview = (event) => {
        setReview(event.currentTarget.value);
    }

    const [originalImage, setOriginalImage] = React.useState(onSelectProduct.picture);

    const handleImage = (picture) => {
        setOriginalImage(picture);
    }
    let devider = 0;
    if (onSelectProduct.reviews[0].ratings === 0) {
        devider = 1
    } else {
        devider = onSelectProduct.reviews[0].ratings;
    }
    return (
        <Card elevation={0} style={{ marginTop: 140 }} className={classes.pictureCardStyle}>
            <div className="row">
                <div className="col-md-8" style={{ zIndex: 1 }} >
                    <h3 style={{ color: colors.darkBlue }} >Lamborghini</h3>
                    <h6 style={{ color: "#27a6d3", marginBottom: 30 }} >Shah Faisal Colony, Karachi Sindh</h6>
                    <span >
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
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
                                    title={onSelectProduct.title}
                                />
                            </ButtonBase>
                        </div>
                    )}
                </div>
            </div>
            <div className="rowNot" style={{ display: 'flex', flexWrap: 'wrap', marginTop: 70 }}>
                <div className="col-md-12" style={{ width: 600 }} >
                    <div className="sol-md-12">
                        <h3 style={{ color: "#3eb549" }} >PKR 90 lacs</h3>
                    </div>
                    <div className="sol-md-12">
                        <h4 style={{ color: "black" }}>Contact Number: +92 336 7088018</h4>
                    </div>
                </div>
                <div className="col-md-12" >

                </div>
                <div className="col-md-12" >

                </div>
            </div>
        </Card>

    );
}