import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Login.css"
import colors from "../../config/colors";
import { toast } from "react-toastify";
import { login } from "../../http/api";

class Login extends Component {
    state = {
        loginFeilds: [
            {
                label: "Email",
                name: "email",
                type: "email"
            },
            {
                label: "Password",
                name: "password",
                type: "password"
            },
        ],
        email: "",
        password: ""
    }

    handleChange = (e, name) => {
        const value = e.target.value;
        if (name === 'email') {
            this.setState({ email: value })
        } else if (name === 'password') {
            this.setState({ password: value })
        }
    }

    handleLogin = async () => {
        const { email, password } = this.state;
        const body = {
            email,
            password
        }

        try {
            const { data: jwt } = await login(body)
            localStorage.setItem('token', jwt);
            this.props.onHandleLogin(this.props.history)
        } catch (error) {
            toast.error('User Login Error: Email or password in invalid ')
        }
    }

    render() {
        const { loginFeilds } = this.state;

        return (
            <>
                <div className="container loginContainer">
                    <div className="row" style={{ justifyContent: "center" }}>
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
                                        type={login.type}
                                    />
                                </div>
                            ))}
                            <div className="col-md-12" style={{ marginLeft: "54%", marginTop: '-1.4vw' }} >
                                <p style={{ alignSelf: "center" }} >Don't have account <span onClick={() => this.props.history.push('/register')} style={{ color: colors.primary, cursor: "pointer" }} >Sign up</span> </p>
                            </div>

                            <div className="col-md-12" >
                                <Button onClick={this.handleLogin} className="loginButton" onClick={this.handleLogin} style={{ backgroundColor: colors.primary }} variant="contained" color="primary">
                                    Login
                                </Button>
                            </div>
                            {/* <div className="col-md-12" >
                                <Button className="forgetButton" onClick={this.handleLogin} variant="contained" color="primary">
                                    Forget Password
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Login;