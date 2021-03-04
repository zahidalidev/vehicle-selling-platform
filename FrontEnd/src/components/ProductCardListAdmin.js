import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useHistory } from "react-router"


import colors from "../config/colors"
import "./ProductCard.css"
import { Button } from '@material-ui/core';

const ProductCardListAdmin = ({ image, title, mainHeading, subHeading, subsubHeading, adID }) => {
    const history = useHistory();

    return (
        <Card key={adID} className="cardList" >
            <div className="row" >
                <div className="col-md-3" >
                    <CardMedia
                        component="img"
                        alt="Vehicle"
                        style={{ height: 110, width: 155 }}
                        image={image}
                        title={title}
                    />

                </div>
                <div className="col-md-5" style={{ marginTop: 20, whiteSpace: "nowrap" }} >
                    <div style={{ display: 'flex', flexDirection: 'columns' }} >
                        <CardContent style={{ flex: '1 0 auto' }} >
                            <Typography style={{ fontWeight: "bold", fontSize: 18, color: colors.darkBlue }} >
                                {mainHeading}
                            </Typography>

                        </CardContent>
                    </div>
                </div>

                <div className="col-md-2" style={{ marginTop: 40, marginLeft: -50, whiteSpace: "nowrap" }}>
                    <Typography style={{ fontSize: 15, color: colors.primary }}>
                        {subHeading}
                    </Typography>

                </div>

                <div className="col-md-2" style={{ marginTop: 40, marginLeft: 30 }}>
                    <Typography style={{ fontSize: 15, color: colors.mediumGray }} >
                        {subsubHeading}
                    </Typography>
                </div>

            </div>
        </Card >
    );
}

export default ProductCardListAdmin;