import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Register.css"
import colors from "../../config/colors";

class Register extends Component {
    state = {
        RegisterFeilds: [
            {
                label: "Full Name",
                name: "fillname"
            },
            {
                label: "Email",
                name: "email"
            },
            {
                label: "Password",
                name: "password"
            },
            {
                label: "Confirm Password",
                name: "confirmpassword"
            },
        ]
    }

    handleChange = (e, name) => {

    }

    render() {
        const { RegisterFeilds } = this.state;

        return (
            <>
                <div className="container RegisterContainer">
                    <div className="row" style={{ justifyContent: "center" }}>
                        <h1 className="RegisterHeading" style={{ color: colors.primary }} >Register</h1>
                        <div className="col-md-12" >

                            {RegisterFeilds.map((reg, i) => (
                                <div className="col-md-12" key={i} >
                                    <TextField
                                        className="RegisterTextFeild"
                                        label={reg.label}
                                        variant="outlined"
                                        size="medium"
                                        onChange={(e) => this.handleChange(e, reg.name)}
                                    />
                                </div>
                            ))}

                            <div className="col-md-12" style={{ justifyItems: "center" }} >
                                <Button className="RegisterButton" onClick={this.handleRegister} style={{ backgroundColor: colors.primary }} variant="contained" color="primary">
                                    Register
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Register;