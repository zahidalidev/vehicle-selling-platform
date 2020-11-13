import React, { Component } from 'react';

import { Button, CardMedia, Input } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';

import colors from '../../config/colors';
import "./Admin.css"
import profileImage from "../../assets/slider2.jpg"
import ReportProductCard from '../../components/ReportProductCard';
import AdminSoldAds from './AdminSoldAds';
import AdminUser from './AdminUser';

class Admin extends Component {

    state = {
        ads: [
            {
                id: 1,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Honda Civic 2019",
                price: "PKR 1,23,000",
                city: "Lahore"
            },
            {
                id: 2,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Corola 2019",
                price: "PKR 2,23,134",
                city: "Lahore"
            },
            {
                id: 3,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Prius 2019",
                price: "PKR 3,23,000",
                city: "Gujranwala"
            },
            {
                id: 4,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Honda Civic 2019",
                price: "PKR 6,23,000",
                city: "Islamabad"
            },
            {
                id: 5,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Corolla",
                price: "PKR 2,10,000",
                city: "Multan"
            },
            {
                id: 6,
                image: profileImage,
                title: "This is vehicle",
                modelName: "Honda Civic 2018",
                price: "PKR 1,23,000",
                city: "Sialkot"
            },
        ],

        users: [
            {
                userID: 1,
                fullName: "zahid Ali",
                email: "m.zahidalidev@gmail.com",
                contactNumber: "0336-7088018",
                fullAddress: "satelite town gujranwala"
            },
            {
                userID: 2,
                fullName: "Ahmad Billal",
                email: "ahmadbilaldev@gmail.com",
                contactNumber: "0336-7088018",
                fullAddress: "satelite town gujranwala"
            },
            {
                userID: 3,
                fullName: "Abdul Samad",
                email: "sktabdulsamad@gmail.com",
                contactNumber: "0336-7088018",
                fullAddress: "satelite town gujranwala"
            },
            {
                userID: 4,
                fullName: "zahid Ali",
                email: "m.zahidalidev@gmail.com",
                contactNumber: "0336-7088018",
                fullAddress: "satelite town gujranwala"
            },
            {
                userID: 5,
                fullName: "zahid Ali",
                email: "m.zahidalidev@gmail.com",
                contactNumber: "0336-7088018",
                fullAddress: "satelite town gujranwala"
            },
        ],

        adminUserVisible: true

    }


    render() {
        const { ads, users, adminUserVisible } = this.state;

        return (
            <div style={{ width: "98.5%" }}>
                <div className="col-md-12" style={{ marginTop: 150, paddingLeft: 100, marginBottom: -170 }} >
                    <div className="col-md-12"  >
                        <Button onClick={() => this.setState({ adminUserVisible: false })} style={{ width: "10%", height: 50, backgroundColor: colors.primary }} variant="contained" color="primary" > Sold Ads </Button>
                        <Button onClick={() => this.setState({ adminUserVisible: true })} style={{ marginLeft: 20, width: "10%", height: 50, backgroundColor: colors.primary }} variant="contained" color="primary" > All Users </Button>
                    </div>
                </div>

                {adminUserVisible && <AdminUser users={users} />}
                {!adminUserVisible && <AdminSoldAds ads={ads} />}

            </div>
        );
    }
}

export default Admin;