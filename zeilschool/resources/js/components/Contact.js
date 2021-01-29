import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Contact() {
    return (
        <div className="jumbotron white">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-md-center mpt">
                    <div className="col">
                        <div className="card pb-4 inset">
                            <div className="topRounded"></div>
                            <div className="card-body bottomContact">
                                <h1 className="center pb-5">Telefoon</h1>
                                <ul className="ContactList">
                                    <li className="mb-3">0624001200</li>
                                    <li className="mb-3">0625132091</li>
                                    <li className="mb-3">0635778011</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card pb-4 inset larger">
                            <div className="topRounded "></div>
                            <div className="card-body bottomContact">
                                <h1 className="center pb-5">Email</h1>
                                <ul className="ContactList">
                                    <li className="mb-3">henklang@zeilschool.com</li>
                                    <li className="mb-3">sarahveen@zeilschool.com</li>
                                    <li className="mb-3">helpDesk@zeilschool.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card pb-4 inset">
                            <div className="topRounded"></div>
                            <div className="card-body bottomContact">
                                <h1 className="center pb-5">Post</h1>
                                <ul className="ContactList">
                                    <li className="mb-3">Zeeland, Breskens</li>
                                    <li className="mb-3">Promenade 24</li>
                                    <li className="mb-3">7448 TU</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

if (document.getElementById('contact')) {
    ReactDOM.render(<Contact />, document.getElementById('contact'));
}
