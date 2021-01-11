import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';


class Search extends Component {

    state = {
        searchBody: {
            city: '',
            registrationYear: '',
            engine: '',
            vehicleModel: '',
            exteriorColour: ''
        }
    }

    handleChange = (name, e) => {
        let { searchBody } = this.state;
        searchBody[name] = e.target.value
        this.setState({ searchBody })
    }

    handleSearch = () => {
        this.props.onSearchAd(this.props.history, this.state.searchBody);
    }

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
                                onChange={(e) => this.handleChange('city', e)}
                                label="City"
                                inputProps={{
                                    name: 'city',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={'lahore'}>Lahore</option>
                                <option value={'islamabad'}>Islamabad</option>
                                <option value={"karachi"}>Karachi</option>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="col-md-4" style={{ paddingLeft: 110 }} >
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Year</InputLabel>
                            <Select
                                native
                                // value={ }
                                onChange={(e) => this.handleChange('registrationYear', e)}
                                label="Registration Year"
                                inputProps={{
                                    name: 'registrationYear',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={'2010'}>2010</option>
                                <option value={'2011'}>2011</option>
                                <option value={'2012'}>2012</option>
                                <option value={'2013'}>2013</option>
                                <option value={'2014'}>2014</option>
                                <option value={'2015'}>2015</option>
                                <option value={'2016'}>2016</option>
                                <option value={'2017'}>2017</option>
                                <option value={'2018'}>2018</option>
                                <option value={'2019'}>2019</option>
                                <option value={'2020'}>2020</option>

                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4" >
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Engine</InputLabel>
                            <Select
                                native
                                // value={ }
                                onChange={(e) => this.handleChange('engine', e)}
                                label="Engine"
                                inputProps={{
                                    name: 'engine',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={'manual'}>Manual</option>
                                <option value={'automatic'}>Automatic</option>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ marginBottom: 40 }}>
                    <div className="col-md-4" style={{ paddingLeft: 100 }} >
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Vehicle Model</InputLabel>
                            <Select
                                native
                                // value={ }
                                onChange={(e) => this.handleChange('vehicleModel', e)}
                                label="Vehicle Model"
                                inputProps={{
                                    name: 'vehicleModel',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={'honda city'}>Honda City</option>
                                <option value={'corrola'}>Corrola</option>
                                <option value={'toyota prius'}>Toyota Prius</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4" >
                        <FormControl variant="outlined" >
                            <InputLabel style={{ whiteSpace: "nowrap" }} htmlFor="outlined-age-native-simple">Exterior Colour</InputLabel>
                            <Select
                                native
                                // value={ }
                                onChange={(e) => this.handleChange('exteriorColour', e)}
                                label="Exterior Colour"
                                inputProps={{
                                    name: 'exteriorColour',
                                    id: 'outlined-age-native-simple',
                                }}
                                style={{ width: "280%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={'red'}>Red</option>
                                <option value={"black"}>Black</option>
                                <option value={'white'}>White</option>
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="row justify-content-md-center" style={{ marginTop: 20 }}>
                    <Button onClick={this.handleSearch} style={{ width: "15%", backgroundColor: "#178971", marginLeft: "57%" }} variant="contained" color="primary">Search</Button>
                </div>
            </div>
        );
    }
}

export default Search;