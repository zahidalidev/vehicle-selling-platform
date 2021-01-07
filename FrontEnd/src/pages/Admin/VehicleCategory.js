import React, { Component } from 'react';

import { CardMedia, Input } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import colors from '../../config/colors';
import "./Admin.css"
import profileImage from "../../assets/slider2.jpg"
import ReportProductCard from '../../components/ReportProductCard';

class VehicleCategory extends Component {
    state = {
        categories: [
            { id: 1, title: "category" },
            { id: 1, title: "category" },
            { id: 1, title: "category" },
            { id: 1, title: "category" },
            { id: 1, title: "category" },
            { id: 1, title: "category" },
        ]
    }
    render() {
        const { categories } = this.state;

        return (
            <div className="row userBox2">
                <div className="col-md-12"  >
                    <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                        <h1> Vehicle Categories</h1>
                    </div>
                </div>

                <div className="col-md-6" style={{ marginTop: 50, marginBottom: 30, marginRight: 100 }}>
                    <Card className="row" style={{ paddingTop: 50, paddingBottom: 30 }} >
                        <div className="col-md-12" >
                            <TextField
                                className="loginTextFeild"
                                label="Add category"
                                variant="outlined"
                                size="small"
                            // onChange={(e) => this.handleChange(e, login.name)}
                            />
                        </div>
                        <div className="col-md-3" style={{ justifyItems: "center" }} >
                            <Button className="loginButton" style={{ backgroundColor: colors.primary }} variant="contained" color="primary">
                                Add
                            </Button>
                        </div>
                    </Card>
                </div>

                <div className="col-md-4" style={{ marginTop: 50, marginBottom: 30 }}>
                    {categories.map((category, i) =>
                        <Card className="row" style={{ marginBottom: 10, paddingLeft: 40 }} >
                            <div className="col-md-7" style={{ marginTop: 20, marginBottom: 20, whiteSpace: "nowrap" }}>
                                <h6>{category.title}</h6>
                            </div>
                            <div className="col-md-5" style={{ marginTop: 20, marginBottom: 20, whiteSpace: "nowrap" }}>
                                <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        );
    }
}

export default VehicleCategory;