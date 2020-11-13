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

const UserListCard = ({ userID, userName, userEmail, sellerName, soldDate }) => {
    const history = useHistory();

    return (
        <Card className="cardListReport" style={{ justifyContent: "center", alignContent: "center" }} >
            <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                <div className="col-md-6" style={{ justifyContent: "center", alignContent: "center" }} >
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <div className="col-md-2" >
                            <Typography style={{ marginTop: 10, whiteSpace: "nowrap", fontWeight: "bold", fontSize: 18, color: colors.darkBlue }} >
                                {userID}
                            </Typography>
                        </div>
                        <div className="col-md-4" >
                            <Typography style={{ marginTop: 10, whiteSpace: "nowrap", fontSize: 15, color: colors.primary }}>
                                {userName}
                            </Typography>
                        </div>
                        <div className="col-md-6" >
                            <Typography style={{ marginTop: 10, whiteSpace: "nowrap", fontSize: 15, color: colors.mediumGray }} >
                                {userEmail}
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className="col-md-2" style={{ marginTop: 10, marginLeft: -20 }}>
                    <h6 style={{ color: colors.grayBlack, whiteSpace: "nowrap" }}>{sellerName}</h6>
                </div>

                <div className="col-md-4" style={{ marginTop: 10, marginLeft: -30 }}>
                    <h6 style={{ color: "red", whiteSpace: "nowrap" }}>{soldDate}</h6>
                </div>

            </div>
        </Card >
    );
}

export default UserListCard;