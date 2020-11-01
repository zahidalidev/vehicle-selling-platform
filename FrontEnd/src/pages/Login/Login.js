import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Login.css"
import colors from "../../config/colors";

class Login extends Component {
    state = {
        loginDetails: {
            email: "",
            password: ""
        }
    }

    handleChange = (e, name) => {
        const loginDetails = this.state.loginDetails;
        loginDetails[name] = e.target.value;
        this.setState({ loginDetails })
    }

    render() {

        return (
            <>
                <div className="container loginContainer">
                    <div className="row" style={{ justifyContent: "center", marginTop: 40 }}>
                        <h1 className="loginHeading" style={{ color: colors.primary }} >Login</h1>
                        <div className="col-md-12" >
                            <div className="col-md-12">
                                <TextField
                                    className="loginTextFeild"
                                    label="Email"
                                    variant="outlined"
                                    size="medium"
                                    onChange={(e) => this.handleChange(e, "email")}
                                />
                            </div>

                            <div className="col-md-12">
                                <TextField
                                    className="loginTextFeild"
                                    label="password"
                                    variant="outlined"
                                    size="medium"
                                    onChange={(e) => this.handleChange(e, "password")}
                                />
                            </div>

                            <div className="col-md-12" style={{ justifyItems: "center" }} >
                                <Button className="loginButton" onClick={this.handleLogin} style={{ backgroundColor: colors.primary }} variant="contained" color="primary">
                                    Login
                                </Button>
                            </div>
                            <div className="col-md-12" >
                                <Button className="forgetButton" onClick={this.handleLogin} variant="contained" color="primary">
                                    Forget Password
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Login;