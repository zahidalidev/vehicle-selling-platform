import React, { Component } from 'react';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import colors from "../config/colors"
import "./ProductCard.css"

const ProductCard = ({ image, title, mainHeading, subHeading, subsubHeading }) => {
    return (
        <Card className="card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography style={{ fontWeight: "bold", fontSize: 18, color: colors.darkBlue }} >
                        {mainHeading}
                    </Typography>
                    <Typography style={{ fontSize: 15, color: colors.primary }}>
                        {subHeading}
                    </Typography>
                    <Typography style={{ fontSize: 15, color: colors.mediumGray }} >
                        {subsubHeading}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProductCard;