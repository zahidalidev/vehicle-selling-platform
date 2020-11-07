import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router"

import colors from "../config/colors"
import "./ProductCard.css"

const ProductCard = ({ image, title, mainHeading, subHeading, subsubHeading, id }) => {
    const history = useHistory();

    return (
        <Card className="card" onClick={() => history.push(`/addetails/${id}`)} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Vehicle"
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