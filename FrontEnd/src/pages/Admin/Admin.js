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
import VehicleCategory from './VehicleCategory';

class Admin extends Component {

    state = {
        adminUserVisible: true,
        adminSoldAddVisible: false,
        adminCategoryVisible: false,
    }


    render() {
        const { adminUserVisible, adminSoldAddVisible, adminCategoryVisible } = this.state;

        return (
            <div style={{ width: "98.5%" }}>
                <div className="col-md-12" style={{ marginTop: 150, paddingLeft: 100, marginBottom: -120 }} >
                    <div className="col-md-12"  >
                        <Button onClick={() => this.setState({
                            adminUserVisible: true,
                            adminSoldAddVisible: false,
                            adminCategoryVisible: false,
                        })} style={{ whiteSpace: "nowrap", width: "10%", height: 50, backgroundColor: colors.primary }} variant="contained" color="primary" > All Users </Button>
                        <Button onClick={() => this.setState({
                            adminUserVisible: false,
                            adminSoldAddVisible: true,
                            adminCategoryVisible: false,
                        })} style={{ marginLeft: 20, width: "10%", height: 50, backgroundColor: colors.primary }} variant="contained" color="primary" > All Ads </Button>
                        <Button onClick={() => this.setState({
                            adminUserVisible: false,
                            adminSoldAddVisible: false,
                            adminCategoryVisible: true,
                        })} style={{ whiteSpace: "nowrap", marginLeft: 20, width: "18%", height: 50, backgroundColor: colors.primary }} variant="contained" color="primary" > Vehicle Categories </Button>
                    </div>
                </div>

                {adminUserVisible && <AdminUser />}
                {adminSoldAddVisible && <AdminSoldAds />}
                {adminCategoryVisible && <VehicleCategory />}

            </div>
        );
    }
}

export default Admin;