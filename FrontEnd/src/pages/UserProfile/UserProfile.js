import React, { Component } from 'react';
import { Button, Card, CardMedia, Input } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import { toast } from 'react-toastify';

import http from '../../config/http';
import colors from '../../config/colors';
import "./UserProfile.css"
import ProductCardList from '../../components/ProductCardList';
import { getCurrentUser, getCurrentUserAds, updateUser, updateUserProfile, deleteUserAd } from '../../http/api';

const endPoint = http.apiEndPoint;

class UserProfile extends Component {

    state = {
        ads: [],
        showFullNameInput: false,
        showEmailInput: false,
        showNumberInput: false,
        showAddressInput: false,
        showFileInput: false,
        currentUser: {},
        profileImage: null
    }

    getAds = async (id) => {
        try {
            const { data: ads } = await getCurrentUserAds(id)
            this.setState({ ads })
        } catch (error) {
            toast.error('Getting user ads error')
        }
    }

    getUser = async () => {
        const token = localStorage.getItem('token');
        try {
            const { data: currentUser } = await getCurrentUser(token)
            this.setState({ currentUser })
            return currentUser._id
        } catch (error) {
            toast.error("User not found")
        }
    }

    componentDidMount = async () => {
        const id = await this.getUser()
        await this.getAds(id)
    }

    handleCurrentUserUpdate = (e, name) => {
        const value = e.target.value;
        let currentUser = this.state.currentUser;
        currentUser[name] = value;
        this.setState({ currentUser })
    }

    handleUserUpdate = async () => {
        const token = localStorage.getItem('token');
        try {
            const { data: currentUser } = await updateUser(this.state.currentUser, token)
            this.setState({ currentUser })
            toast.success("Profile updated")
        } catch (error) {
            // console.log(error)
            toast.error("User not found")
        }
    }

    handleImageChange = (e) => {
        this.setState({
            profileImage: e.target.files[0]
        })
    }

    UpdateProfileImage = async (e) => {
        e.preventDefault();

        let data = new FormData();
        data.append('file', this.state.profileImage);

        try {
            const { data: currentUser } = await updateUserProfile(this.state.currentUser._id, data)
            // console.log(currentUser)
            this.setState({ currentUser })
            toast.success("Profile Image updated")
        } catch (error) {
            // console.log("hi", error)
            toast.error("Profile Image not updated")
        }

        this.setState({ showFileInput: false })
    }

    deleteAd = async (id) => {
        const originalAds = this.state.ads;
        let ads = this.state.ads;
        ads.map((ad, i) => {
            if (ad._id === id) {
                ads.splice(i, 1)
            }
        })
        this.setState({ ads })

        try {
            const { data } = await deleteUserAd(id)
            console.log(data)
            toast.success('Ad Deleted')
            this.props.onGetAds()
        } catch (error) {
            this.setState({ ads: originalAds })
        }
        console.log(ads)
    }

    render() {

        const { ads, showFullNameInput, showEmailInput, showNumberInput, showAddressInput, showFileInput, currentUser } = this.state;

        return (
            <div style={{ width: "98.5%" }} >
                <div className="row userBox">
                    {!showFileInput ?
                        <div className="col-md-7">
                            <div className="row" style={{ justifyContent: "flex-end", alignItems: "flex-end" }} >
                                <CreateIcon onClick={() => { this.setState({ showFileInput: true }) }} color="primary" style={{ cursor: 'pointer', marginBottom: '-1vw', marginTop: '1vw' }} />
                                <CardMedia
                                    component="img"
                                    alt="Vehicle"
                                    height="500"
                                    image={`${endPoint}/${currentUser.profileImage}`}
                                    style={{ padding: 20, borderRadius: 30 }}
                                />
                            </div>
                        </div>
                        :
                        <Card className="col-md-7">
                            <div className="row" style={{ marginLeft: "10%", height: '38vw', marginTop: "5%", justifyContent: "center", alignItems: "center" }} >
                                <form encType="multipart/form-data" >
                                    <div style={{ maxWidth: "50%" }} >
                                        <input style={{ color: colors.primary }} type="file" onChange={this.handleImageChange} required />
                                    </div>
                                    {/* <input style={{ backgroundColor: colors.primary, color: "white" }} type="submit" value="Submit"></input> */}
                                    <div className="row" >
                                        <Button onClick={() => { this.setState({ showFileInput: false }) }} style={{ marginLeft: "6%", marginTop: '2vw', backgroundColor: colors.primaryLight, color: "white" }} variant="contained" >Cancel</Button>
                                        <Button onClick={this.UpdateProfileImage} style={{ marginLeft: "5%", marginTop: '2vw', backgroundColor: colors.primary, color: "white" }} variant="contained" >Update</Button>
                                    </div>

                                </form>
                            </div>
                        </Card>
                    }
                    <div className="col-md-5" style={{ justifyContent: "center" }}>
                        <div className="row" style={{ justifyContent: "center", marginTop: 50 }} >
                            {showFullNameInput ?
                                <div>
                                    <Input
                                        value={currentUser.fullName}
                                        style={{ fontSize: 40, width: 300 }}
                                        onChange={(e) => this.handleCurrentUserUpdate(e, 'fullName')}
                                    />
                                    <DoneIcon onClick={() => { this.setState({ showFullNameInput: false }) }} color="primary" style={{ cursor: 'pointer', fontSize: 32, marginTop: 14 }} />
                                </div>
                                :
                                <h1>{currentUser.fullName} <CreateIcon onClick={() => { this.setState({ showFullNameInput: true }) }} color="primary" style={{ cursor: 'pointer', marginLeft: 10, marginBottom: 10 }} /></h1>
                            }

                        </div>
                        <div className="row" style={{ justifyContent: "center", marginTop: 50 }} >
                            {showEmailInput ?
                                <div>
                                    <Input
                                        value={currentUser.email}
                                        style={{ fontSize: 40, width: 300 }}
                                        onChange={(e) => this.handleCurrentUserUpdate(e, 'email')}
                                    />
                                    <DoneIcon onClick={() => { this.setState({ showEmailInput: false }) }} color="primary" style={{ cursor: 'pointer', fontSize: 32, marginTop: 14 }} />
                                </div>
                                :
                                <h5> Email: {currentUser.email} <CreateIcon onClick={() => { this.setState({ showEmailInput: true }) }} color="primary" style={{ cursor: 'pointer', marginLeft: 10, marginBottom: 10 }} /></h5>
                            }

                        </div>
                        <div className="row" style={{ justifyContent: "center" }} >
                            {showNumberInput ?
                                <div>
                                    <Input
                                        value={currentUser.contactNumber}
                                        style={{ fontSize: 40, width: 300 }}
                                        onChange={(e) => this.handleCurrentUserUpdate(e, 'contactNumber')}
                                    />
                                    <DoneIcon onClick={() => { this.setState({ showNumberInput: false }) }} color="primary" style={{ cursor: 'pointer', fontSize: 32, marginTop: 14 }} />
                                </div>
                                :
                                <h5> Contact Number: {currentUser.contactNumber} <CreateIcon onClick={() => { this.setState({ showNumberInput: true }) }} color="primary" style={{ cursor: 'pointer', marginLeft: 10, marginBottom: 10 }} /></h5>
                            }

                        </div>
                        {/* <div className="row" style={{ justifyContent: "center" }} >
                            <h5>Password: thisispassword <CreateIcon color="primary" style={{ cursor: 'pointer', marginLeft: 10, marginBottom: 10 }} /></h5>
                            <div>
                            <Input
                                value="Zahid Ali"
                                style={{ fontSize: 40, width: 300 }}
                            />
                            <DoneIcon color="primary" style={{cursor: 'pointer', fontSize: 32, marginTop: 14 }} />
                            </div>

                        </div> */}
                        <div className="row" style={{ justifyContent: "center" }} >
                            {showAddressInput ?
                                <div>
                                    <Input
                                        value={currentUser.fullAddress}
                                        style={{ fontSize: 40, width: 300 }}
                                        onChange={(e) => this.handleCurrentUserUpdate(e, 'fullAddress')}
                                    />
                                    <DoneIcon onClick={() => { this.setState({ showAddressInput: false }) }} color="primary" style={{ cursor: 'pointer', fontSize: 32, marginTop: 14 }} />
                                </div>
                                :

                                <h5>Address: {currentUser.fullAddress} <CreateIcon onClick={() => { this.setState({ showAddressInput: true }) }} color="primary" style={{ cursor: 'pointer', marginLeft: 10, marginBottom: 10 }} /></h5>
                            }
                        </div>
                        <div className="row" style={{ justifyContent: "center" }} >
                            <Button onClick={this.handleUserUpdate} style={{ marginTop: '2vw', backgroundColor: colors.primary, color: "white" }} variant="contained" >Update</Button>
                        </div>
                    </div>


                </div>
                <div className="row userBox2">
                    <div className="col-md-12"  >
                        <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                            <h1> All Ads</h1>
                        </div>
                    </div>

                    <div className="col-md-12" >

                        <div className="row" style={{ justifyContent: "center", alignContent: "center", marginTop: 100 }} >
                            {ads.map((ad, i) => (
                                <ProductCardList
                                    image={`${endPoint}/${ad.images[0]}`}
                                    title={ad.vehicleName}
                                    mainHeading={ad.vehicleName}
                                    subHeading={ad.sellingPrice}
                                    subsubHeading={ad.vehicleModel}
                                    adID={ad._id}
                                    onDeleteAd={this.deleteAd}
                                />
                            ))
                            }
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default UserProfile;