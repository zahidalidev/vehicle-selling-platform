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
                                <option value={'Islamabad'}>Islamabad</option>
                                <option value={"karachi"}>Karachi</option>
                                <option value={"Sialkot"}>Sialkot</option>
                                <option value={"Gujranwala"}>Gujranwala</option>
                                <option value={"Faislabad"}>Faislabad</option>
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
                                <option value={'2000'}>2000</option>
                                <option value={'2001'}>2001</option>
                                <option value={'2002'}>2002</option>
                                <option value={'2003'}>2003</option>
                                <option value={'2004'}>2004</option>
                                <option value={'2005'}>2005</option>
                                <option value={'2006'}>2006</option>
                                <option value={'2007'}>2007</option>
                                <option value={'2008'}>2008</option>
                                <option value={'2009'}>2009</option>
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

                    <div className="col-md-2" >
                    </div>
                    <div className="col-md-4" style={{ marginLeft: "5vw" }} >
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
                                style={{ width: "320%" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={'red'}>Red</option>
                                <option value={"black"}>Black</option>
                                <option value={'white'}>White</option>
                                <option value={'Blue'}>Blue</option>
                                <option value={'Green'}>Green</option>
                                <option value={'Yellow'}>Yellow</option>
                                <option value={'Purple'}>Purple</option>
                                <option value={'Orange'}>Orange</option>
                                <option value={'Grey'}>Grey</option>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="col-md-4" style={{ marginTop: "1vw" }}>
                        <Button onClick={this.handleSearch} style={{ paddingLeft: 20, paddingRight: 20, backgroundColor: "#178971" }} variant="contained" color="primary">Search</Button>
                    </div>
                    <div className="col-md-2" >
                    </div>
                </div>

            </div>
        );
    }
}

export default Search;