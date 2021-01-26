import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Main() {
    return (
        <div className="Main color2">
            <h1 className="grayText mt-5 ml-5">Laatste nieuws</h1>
            <div className="container pb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-md-center mpt">
                    <div className="col inlineShadow">
                        <div className="card pb-4">
                            <img className="card-img-top topCard" src="/images/stock1.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante enim, commodo ac semper et, accumsan nec est. Vestibulum</p>
                                <a className="MoreButton">Meer informatie</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card pb-4">
                            <img className="card-img-top topCard" src="/images/stock3.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">tortor justo, vulputate sit amet consequat id, vestibulum quis sapien. Aliquam erat volutpat. Suspendisse potenti. Vestibulum lectus odio,</p>
                                <a className="MoreButton">Meer informatie</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card pb-4">
                            <img className="card-img-top topCard" src="/images/stock4.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">sodales, nulla ligula luctus tellus, eu gravida neque est sit amet nunc. Integer eleifend, nunc in condimentum pretium, nisi nisl convallis</p>
                                <a className="MoreButton">Meer informatie</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
