import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Register.css"
import colors from "../../config/colors";
import { toast } from "react-toastify";
import { postUser } from "../../http/api";

class Register extends Component {

    state = {
        RegisterFeilds: [
            {
                label: "Full Name",
                name: "fullName",
                type: "text"
            },
            {
                label: "Email",
                name: "email",
                type: "email"
            },
            {
                label: "Contact Number",
                name: "contactNumber",
                type: "text"
            },
            {
                label: "Full Address",
                name: "fullAddress",
                type: "text"
            },
            {
                label: "Password",
                name: "password",
                type: "password"
            },
            {
                label: "Confirm Password",
                name: "confirmPassword",
                type: "password"
            },
        ],
        fullName: '',
        email: '',
        contactNumber: '',
        fullAddress: '',
        password: '',
        confirmPassword: '',
        passwordMatchError: false
    }

    handleChange = (e, name) => {
        const value = e.target.value
        if (name == 'fullName') {
            this.setState({ fullName: value })
        }
        else if (name === 'email') {
            this.setState({ email: value })
        }
        else if (name === 'contactNumber') {
            this.setState({ contactNumber: value })
        }
        else if (name === 'fullAddress') {
            this.setState({ fullAddress: value })
        }
        else if (name === 'password') {
            this.setState({ password: value })
        }
        else if (name === 'confirmPassword') {
            this.setState({ confirmPassword: value })
            if (this.state.password === value) {
                this.setState({ passwordMatchError: false })
            }
        }
    }


    handleRegister = async () => {
        if (this.state.password != this.state.confirmPassword) {
            this.setState({ passwordMatchError: true })
            toast.error("Passwrod and Confirm Password do not match")
        }
        else if (this.state.password === this.state.confirmPassword) {
            this.setState({ passwordMatchError: false })

            let { fullName, email, contactNumber, fullAddress, password } = this.state;

            fullName = fullName.trim();
            email = email.trim();
            contactNumber = contactNumber.trim();
            fullAddress = fullAddress.trim();
            password = password.trim();

            if (fullName === '', email === '' || contactNumber === '' || fullAddress === '' || password === '') {
                toast.error("Please fill all the feilds")
            } else {
                const body = {
                    fullName,
                    email,
                    contactNumber,
                    fullAddress,
                    password
                }

                try {
                    await postUser(body)
                    this.props.history.push('/login')
                    toast.success("User Registered Successfully")

                } catch (error) {
                    toast.error('User Registraion Error: ' + error.response.data.message)
                }
            }
        }
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
                                        error={this.state.passwordMatchError && (reg.name === 'confirmPassword' || reg.name === 'password') ? true : false}
                                        type={reg.type}
                                    />
                                </div>
                            ))}

                            <div className="col-md-12" style={{ marginLeft: "46%", marginTop: '-1.4vw' }} >
                                <p style={{ alignSelf: "center" }} >Already have an account <span onClick={() => this.props.history.push('/login')} style={{ color: colors.primary, cursor: "pointer" }} >Login</span> </p>
                            </div>

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