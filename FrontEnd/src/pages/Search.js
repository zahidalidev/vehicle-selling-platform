import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';


class Search extends Component {
    render() {
        return (
            <div className="container" >
                <p style={{ color: '#424444', fontSize: 35, marginTop: 130, marginBottom: 70 }} >Search</p>
                <div className="row justify-content-md-center" style={{ marginBottom: 40 }}>
                    <div className="col-md-4" style={{ paddingLeft: 100 }} >
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">City</InputLabel>
                            <Select
                                native
                                // value={ }
                                // onChange={ }
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4">
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Price Range</InputLabel>
                            <Select
                                native
                                // value={ }
                                // onChange={ }
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4" style={{ marginLeft: -85 }}>
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Year</InputLabel>
                            <Select
                                native
                                // value={ }
                                // onChange={ }
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
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
                    <div className="col-md-4" style={{ paddingLeft: 100 }} >
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Engine</InputLabel>
                            <Select
                                native
                                // value={ }
                                // onChange={ }
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4">
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Engine Capacity</InputLabel>
                            <Select
                                native
                                // value={ }
                                // onChange={ }
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4" style={{ marginLeft: -85 }}>
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Mileage</InputLabel>
                            <Select
                                native
                                // value={ }
                                // onChange={ }
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
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
                    <div className="col-md-4" style={{ paddingLeft: 100 }} >
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Exterior Color</InputLabel>
                            <Select
                                native
                                // value={ }
                                // onChange={ }
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4">
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Car Make or Model</InputLabel>
                            <Select
                                native
                                // value={ }
                                // onChange={ }
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4" style={{ marginLeft: -85 }}>
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ marginTop: 70 }}>
                    <Button style={{ width: "15%", backgroundColor: "#178971", marginLeft: "57%" }} variant="contained" color="primary">Search</Button>
                </div>
            </div>
        );
    }
}

export default Search;