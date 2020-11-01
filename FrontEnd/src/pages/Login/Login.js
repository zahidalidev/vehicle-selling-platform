import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Login.css"
import colors from "../../config/colors";

class Login extends Component {
    state = {
        loginFeilds: [
            {
                label: "Email",
                name: "email"
            },
            {
                label: "Password",
                name: "password"
            },
        ]
    }

    handleChange = (e, name) => {

    }

    render() {
        const { loginFeilds } = this.state;

        return (
            <>
                <div className="container loginContainer">
                    <div className="row" style={{ justifyContent: "center", marginTop: 40 }}>
                        <h1 className="loginHeading" style={{ color: colors.primary }} >Login</h1>
                        <div className="col-md-12" >

                            {loginFeilds.map((login, i) => (
                                <div className="col-md-12" key={i} >
                                    <TextField
                                        className="loginTextFeild"
                                        label={login.label}
                                        variant="outlined"
                                        size="medium"
                                        onChange={(e) => this.handleChange(e, login.name)}
                                    />
                                </div>
                            ))}

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