import React, { Component } from 'react';

import { CardMedia, Input } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';

import colors from '../../config/colors';
import "./Admin.css"
import profileImage from "../../assets/slider2.jpg"
import UserListCard from '../../components/UserListCard';

class AdminUser extends Component {

    render() {
        const { users } = this.props;

        return (
            <div className="row userBox2">
                <div className="col-md-12"  >
                    <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                        <h1> All Users</h1>
                    </div>
                </div>

                <div className="col-md-12" style={{ marginTop: 80, marginBottom: 30 }}>
                    <div className="row" >
                        <div className="col-md-1" ></div>
                        <div className="col-md-6" style={{ justifyContent: "center", alignContent: "center" }} >
                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                <div className="col-md-1" >
                                    <h5 style={{ marginLeft: -20, fontSize: 25, whiteSpace: "nowrap" }} >ID</h5>
                                </div>
                                <div className="col-md-4" >
                                    <h5 style={{ marginLeft: 25, fontSize: 25, whiteSpace: "nowrap" }} >Name</h5>

                                </div>
                                <div className="col-md-4" >
                                    <h5 style={{ marginLeft: 70, fontSize: 25, whiteSpace: "nowrap" }} >Email</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" >
                            <h5 style={{ marginLeft: -80, fontSize: 25, whiteSpace: "nowrap" }} >Contact</h5>

                        </div>
                        <div className="col-md-2" >
                            <h5 style={{ marginLeft: -90, fontSize: 25, whiteSpace: "nowrap" }} >Address</h5>

                        </div>
                    </div>
                </div>

                <div className="col-md-12" >

                    <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                        {users.map((user, i) => (
                            <UserListCard
                                userID={user.userID}
                                userName={user.fullName}
                                userEmail={user.email}
                                sellerName={user.contactNumber}
                                soldDate={user.fullAddress}
                                id={i}
                            />
                        ))
                        }
                    </div>
                </div>


            </div>
        );
    }
}

export default AdminUser;