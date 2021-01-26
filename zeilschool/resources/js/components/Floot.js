import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Floot() {
    return (
        <div className="Main color1">
            <div className="container pb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-md-center mpt mb-3">
                    <div className="col">
                        <a className="card pb-4 mt-3 cardHover Tdark" href="/boot/0">
                            <img className="card-img-top topCard2" src="/images/boot1.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text"><h4>De naam van de boot</h4> random text</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a className="card pb-4 mt-3 cardHover Tdark" href="/boot/1">
                            <img className="card-img-top topCard2" src="/images/boot2.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text"><h4>De naam van de boot</h4> random text</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a className="card pb-4 mt-3 cardHover Tdark" href="/boot/2">
                            <img className="card-img-top topCard2" src="/images/boot4.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text"><h4>De naam van de boot</h4> random text</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a className="card pb-4 mt-3 cardHover Tdark" href="/boot/3">
                            <img className="card-img-top topCard2" src="/images/boot5.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text"><h4>De naam van de boot</h4> random text</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a className="card pb-4 mt-3 cardHover Tdark" href="/boot/4">
                            <img className="card-img-top topCard2" src="/images/boot6.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text"><h4>De naam van de boot</h4> random text</p>
                            </div>
                        </a>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default Floot;

if (document.getElementById('floot')) {
    ReactDOM.render(<Floot />, document.getElementById('floot'));
}
