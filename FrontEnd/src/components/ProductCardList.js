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

const ProductCardList = ({ image, title, mainHeading, subHeading, subsubHeading, id }) => {
    const history = useHistory();

    return (
        <Card className="cardList" >
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
                <div className="col-md-3" >
                    <div style={{ display: 'flex', flexDirection: 'columns' }} >
                        <CardContent style={{ flex: '1 0 auto' }} >
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
                    </div>
                </div>

                <div className="col-md-3" style={{ marginTop: 30 }}>
                    <FormControl variant="outlined" >
                        <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Change Visibility</InputLabel>
                        <Select
                            native
                            // value={ }
                            // onChange={ }
                            label="Age"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                            style={{ width: "180%" }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Publish</option>
                            <option value={20}>Stop</option>
                        </Select>
                    </FormControl>
                </div>

                <div className="col-md-2" style={{ marginTop: 40, marginLeft: -30 }}>
                    <Button variant="contained" color="secondary" >Delete Ad</Button>
                </div>

                <div className="col-md-1" style={{ marginTop: 40, marginLeft: -20 }}>
                    <Button variant="contained" color="primary" >Sold</Button>
                </div>
            </div>
        </Card >
    );
}

export default ProductCardList;