import React, { Component } from 'react';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Button, Input } from '@material-ui/core';

import colors from '../../config/colors';

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

class CreateAd extends Component {
    render() {
        return (
            <div className="container" >
                <p style={{ color: '#424444', fontSize: 35, marginTop: 130, marginBottom: 70 }} >Create Ad</p>
                <div className="row justify-content-md-center" style={{ marginBottom: 40 }}>
                    <div className="col-md-6" style={{ paddingLeft: 130 }} >
                        <CssTextField
                            label="Vehicle Name"
                            placeholder="Vehicle Name"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "90%" }}
                        />
                    </div>
                    <div className="col-md-6">
                        <CssTextField
                            label="Registration Year"
                            placeholder="Registration Year"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "80%" }}
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
                        />
                    </div>
                    <div className="col-md-6">
                        <CssTextField
                            label="Vehicle Model"
                            placeholder="Vehicle Model"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "80%" }}
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
                        />
                    </div>
                    <div className="col-md-6">
                        <CssTextField
                            label="Mileage"
                            placeholder="Mileage"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "80%" }}
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
                        />
                    </div>
                    <div className="col-md-6">
                        <CssTextField
                            label="Engine"
                            placeholder="Engine"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "80%" }}
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
                        />
                    </div>
                    <div className="col-md-6">

                        <FormControl variant="outlined" >
                            <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                            <Select
                                native
                                // value={ }
                                // onChange={ }
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "240%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>

                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ marginBottom: 40 }}>
                    <div className="col-md-6" style={{ paddingLeft: 130 }} >
                        <form >
                            Select image to upload:
                            <input type="file" name="fileToUpload" id="fileToUpload" />
                        </form>
                    </div>
                    <div className="col-md-6">
                        <CssTextField
                            label="Description"
                            placeholder="Description"
                            variant="outlined"
                            id="validation-outlined-input"
                            style={{ width: "80%" }}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ marginTop: 70 }}>
                    <Button style={{ width: "15%", backgroundColor: "#178971" }} variant="contained" color="primary">Publish Ad</Button>
                </div>
            </div>
        );
    }
}

export default CreateAd;