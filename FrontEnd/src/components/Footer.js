import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import colors from "../config/colors"

class Footer extends Component {
    render() {
        return (
            <div style={{ marginTop: 200 }}>
                <footer className="page-footer font-weight-lighter" style={{ backgroundColor: colors.primary, color: "white", fontWeight: "350" }}>

                    <div style={{ backgroundColor: colors.darkGray }}>
                        <div className="container">
                            <div className="row py-4 d-flex align-items-center">
                                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                    <h6 className="mb-0" style={{ fontWeight: "350" }} >Get connected with us on social networks!</h6>
                                </div>

                                <div className="col-md-6 col-lg-7 text-center text-md-right">
                                    <a className="fb-ic">
                                        <i className="text-white mr-4">Zahid Ali</i>
                                    </a>
                                    <a target="_blank" href="https://web.facebook.com/engr.zahid.927/" className="fb-ic">
                                        <i className="fa fa-facebook-f text-white mr-4"> </i>
                                    </a>

                                    <a target="_blank" href="https://github.com/zahidalidev" className="gplus-ic">
                                        <i className="fa fa-github text-white mr-4"> </i>
                                    </a>

                                    <a target="_blank" href="https://www.linkedin.com/in/mrzahidali/" className="li-ic">
                                        <i className="fa fa-linkedin text-white mr-4"> </i>
                                    </a>

                                    <a className="fb-ic">
                                        <i className="text-white mr-4">Abdul Samad</i>
                                    </a>
                                    <a target="_blank" href="https://www.facebook.com/prince.bhatti.3979489" className="fb-ic">
                                        <i className="fa fa-facebook-f text-white mr-4"> </i>
                                    </a>

                                    <a target="_blank" href="https://github.com/AbSamDev" className="gplus-ic">
                                        <i className="fa fa-github text-white mr-4"> </i>
                                    </a>

                                    <a target="_blank" href="https://www.linkedin.com/in/abdul-samad-61a9461a0" className="li-ic">
                                        <i className="fa fa-linkedin text-white mr-4"> </i>
                                    </a>

                                    <a className="fb-ic">
                                        <i className="text-white mr-4">Ahmad Bilal</i>
                                    </a>
                                    <a target="_blank" href="https://www.facebook.com/prince.bhatti.3979489" className="fb-ic">
                                        <i className="fa fa-facebook-f text-white mr-4"> </i>
                                    </a>

                                    <a target="_blank" href="https://github.com/AbSamDev" className="gplus-ic">
                                        <i className="fa fa-github text-white mr-4"> </i>
                                    </a>

                                    <a target="_blank" href="https://www.linkedin.com/in/abdul-samad-61a9461a0" className="li-ic">
                                        <i className="fa fa-linkedin text-white mr-4"> </i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container text-center text-md-left mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Vehicle Sell & Buy</h6>
                                <hr style={{ backgroundColor: colors.secondaryLight, width: "60px" }} className="accent-2 col-md-4 mt-0 d-inline-block mx-auto" />
                                <p style={{ fontSize: "14.4px", fontFamily: "Lato !important" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Products</h6>
                                <hr style={{ backgroundColor: colors.secondaryLight, width: "60px" }} className="accent-2 col-md-4 mt-0 d-inline-block mx-auto" />
                                <p>
                                    <a className="text-white" target="_blank" href="https://covid19.mrfixer.pk/">COVID-19 Statistics</a>
                                </p>
                                <p>
                                    <a className="text-white" target="_blank" href="https://github.com/zahidalidev/webshot-chrom-extension">WebShot Chrome Extension</a>
                                </p>
                                <p>
                                    <a className="text-white" target="_blank" href="https://github.com/zahidalidev/github-star-cli">Github Star CLI</a>
                                </p>
                                <p>
                                    <a className="text-white" target="_blank" href="https://github.com/zahidalidev/parenthesis-error-line-detector-cpp">Parenthesis Error Detector</a>
                                </p>

                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                                <hr style={{ backgroundColor: colors.secondaryLight, width: "60px" }} className="accent-2 col-md-4 mt-0 d-inline-block mx-auto" />
                                <p>
                                    <a className="text-white" target="_blank" href="#!">Account</a>
                                </p>
                                <p>
                                    <a className="text-white" target="_blank" href="#!">Information</a>
                                </p>
                                <p>
                                    <a className="text-white" target="_blank" href="#!">Help</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                                <hr style={{ backgroundColor: colors.secondaryLight, width: "60px" }} className="accent-2 col-md-4 mt-0 d-inline-block mx-auto" />
                                <p>
                                    <i className="fa fa-envelope mr-3"></i> m.zahidalidev@gmail.com</p>
                                <p>
                                    <i className="fa fa-phone mr-3"></i> + 92 336 7088 018</p>
                                <p>
                                    <i className="fa fa-envelope mr-3"></i> asamadskt@gmail.com</p>
                                <p>
                                    <i className="fa fa-phone mr-3"></i> + 92 346 6719 203</p>
                                <p>
                                    <i className="fa fa-envelope mr-3"></i> ahmadbilaldev@gmail.com</p>
                                <p>
                                    <i className="fa fa-phone mr-3"></i> +92 316 6793715</p>

                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: colors.lightBlack }} className="footer-copyright text-center py-3">© 2020 Copyright:
                        <a style={{ color: colors.secondaryLight }} target="_blank" href="#"> Auto Zone</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;