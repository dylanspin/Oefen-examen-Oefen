import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Footer() {
    return (
        <footer className="page-footer font-small blue">
            <div className="container-fluid text-center text-md-left color2">
                <div className="row pt-5 pb-5">
                    <div className="col-md-6 mt-md-0 mt-3 pl-5">
                        <h3 className="font-weight-bold text-white">Zeil School De Waai</h3>
                        <h5 className="text-muted">Wij bij Zeil School De Waai willen mensen die plezier van zeilen geven</h5>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    <div className="col-md-3 mb-md-0 mb-3 ">
                        <h5 className="text-uppercase font-weight-bold text-white">Contact</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-muted">Email</a>
                            </li>
                            <li>
                                <a href="#!" className="text-muted">Call</a>
                            </li>
                            <li>
                                <a href="#!" className="text-muted">Discord</a>
                            </li>
                            <li>
                                <a href="#!" className="text-muted">Location</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase font-weight-bold text-white">Bedrijf</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-muted">Wie zijn wij</a>
                            </li>
                            <li>
                                <a href="#!" className="text-muted">Informatie</a>
                            </li>
                            <li>
                                <a href="#!" className="text-muted">Folg ons</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center color1 grayText mt-3">© 2021 Copyright:
                <a href="https://github.com/dylanspin" className="mr-5 text-white">Zeil School De Waai</a>  Styling done by Dylan Spin
            </div>
        </footer>
    );
}

export default Footer;

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}
