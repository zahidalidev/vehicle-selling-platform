import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import jwtDecode from "jwt-decode"
import axios from 'axios'
import http from "../../config/http"
import { getCategories, postAd, postAdImages, getAdsDetail, updateAd } from '../../http/api';


const endPoint = http.apiEndPoint + '/api';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#178971',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#178971',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#868789',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#178971',
            },
        },
    },
})(TextField);

class UpdateAd extends Component {

    state = {
        categories: [],
        ad: {},
        images: []
    }

    getAdDetail = async () => {
        try {
            const id = this.props.match.params.id
            const { data: ad } = await getAdsDetail(id);
            this.setState({ ad })
            console.log(ad)
        } catch (error) {
            toast.error('Ads detail error')
        }
    }
    componentDidMount = async () => {
        try {
            const { data: categories } = await getCategories()
            this.setState({ categories })
            await this.getAdDetail()
        } catch (error) {
            toast.error('getting categories Error: ' + error)
        }
    }

    handleAd = (e, name) => {
        const value = e.target.value;
        let ad = this.state.ad;
        ad[name] = value
        this.setState({ ad })
    }

    handleImageChange = (event) => {
        let images = []
        for (var i = 0; (i < event.target.files.length && i < 3); i++) {
            images[i] = event.target.files.item(i);
        }
        console.log(images)
        this.setState({
            images: images
        })
    }

    handleAdPost = async () => {

        // preparing body of request
        let ad = this.state.ad;
        const token = localStorage.getItem('token')

        try {
            const { data: currentAd } = await updateAd(ad, token)

            let i = this.state.images.length;
            if (i === 0) {
                toast.success('Ad Updated')
            }
            if (currentAd) {
                // preparing images
                this.state.images.map(async (image, j) => {
                    let dataForm = new FormData();
                    dataForm.append('file', image);
                    const { data: resData } = await postAdImages(currentAd._id, dataForm)
                    let res = resData
                    if (i === j + 1) {
                        toast.success('Ad Updated and Published')
                        window.location.reload();
                    }
                })
            }

        } catch (error) {
            toast.error("Ad not added try again" + error.message)
        }

    }

    render() {
        const { categories, ad } = this.state;

        return (
            <div className="container" >
                <p style={{ color: '#424444', fontSize: 35, marginTop: 130 }} >Update Ad</p>
                <div className="row justify-content-md-center" style={{ marginBottom: 40, marginTop: 60 }}>
                    <div className="col-md-6" style={{ paddingLeft: 130 }} >
                        <CssTextField
                            label="Vehicle Name"
                            placeholder="Vehicle Name"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "90%" }}
                            value={ad.vehicleName}
                            onChange={(e) => this.handleAd(e, 'vehicleName')}
                            autoFocus={true}
                        />
                    </div>
                    <div className="col-md-6">
                        <CssTextField
                            label="Registration Year"
                            placeholder="Registration Year"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "80%" }}
                            value={ad.registrationYear}
                            onChange={(e) => this.handleAd(e, 'registrationYear')}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ marginBottom: 40 }}>
                    <div className="col-md-6" style={{ paddingLeft: 130 }} >
                        <CssTextField
                            label="City"
                            placeholder="City"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "90%" }}
                            value={ad.city}
                            onChange={(e) => this.handleAd(e, 'city')}
                        />
                    </div>
                    <div className="col-md-6">
                        <CssTextField
                            label="Vehicle Model"
                            placeholder="Vehicle Model"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "80%" }}
                            value={ad.vehicleModel}
                            onChange={(e) => this.handleAd(e, 'vehicleModel')}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ marginBottom: 40 }}>
                    <div className="col-md-6" style={{ paddingLeft: 130 }} >
                        <CssTextField
                            label="Exterior Color"
                            placeholder="Exterior Color"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "90%" }}
                            value={ad.exteriorColour}
                            onChange={(e) => this.handleAd(e, 'exteriorColour')}
                        />
                    </div>
                    <div className="col-md-6">
                        <CssTextField
                            label="Mileage"
                            placeholder="Mileage"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "80%" }}
                            value={ad.mileage}
                            onChange={(e) => this.handleAd(e, 'mileage')}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ marginBottom: 40 }}>
                    <div className="col-md-6" style={{ paddingLeft: 130 }} >
                        <CssTextField
                            label="Selling Price"
                            placeholder="Selling Price"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "90%" }}
                            value={ad.sellingPrice}
                            onChange={(e) => this.handleAd(e, 'sellingPrice')}
                        />
                    </div>
                    <div className="col-md-6">
                        <CssTextField
                            label="Engine"
                            placeholder="Engine"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "80%" }}
                            value={ad.engine}
                            onChange={(e) => this.handleAd(e, 'engine')}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ marginBottom: 40 }}>
                    <div className="col-md-6" style={{ paddingLeft: 130 }} >
                        <CssTextField
                            label="Vehicle Status"
                            placeholder="Vehicle Status"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "90%" }}
                            value={ad.vehicleStatus}
                            onChange={(e) => this.handleAd(e, 'vehicleStatus')}
                        />
                    </div>
                    <div className="col-md-6">

                        <FormControl variant="outlined" >
                            <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                            <Select
                                native
                                // value={ad.categoryTitle}
                                onChange={(e) => this.handleAd(e, 'categoryTitle')}
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "240%" }}
                            >
                                <option aria-label="None" value="" />
                                {categories.map((cat, i) =>
                                    <option value={cat.title}>{cat.title}</option>
                                )}
                            </Select>
                        </FormControl>

                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ marginBottom: 40 }}>
                    <div className="col-md-6" style={{ paddingLeft: 130 }} >
                        <form encType="multipart/form-data" >
                            Select images only id want to Update (three):
                            <input multiple type="file" onChange={this.handleImageChange} required />

                        </form>
                    </div>
                    <div className="col-md-6">
                        <CssTextField
                            label="Description"
                            placeholder="Description"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "80%" }}
                            value={ad.vehicleDescription}
                            onChange={(e) => this.handleAd(e, 'vehicleDescription')}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ marginTop: 70 }}>
                    <Button onClick={this.handleAdPost} style={{ width: "15%", backgroundColor: "#178971" }} variant="contained" color="primary">Update Ad</Button>
                </div>
            </div>
        );
    }
}

export default UpdateAd;