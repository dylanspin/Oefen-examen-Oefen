import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Main() {
    return (
        <div className="main color1  fixOverlay">
            <div className="container pb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-md-center mpt">
                    <div className="col">
                        <div className="card">
                            <img className="card-img-top topCard" src="..." alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a className="MoreButton">Meer informatie</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img className="card-img-top topCard" src="..." alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a className="MoreButton">Meer informatie</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img className="card-img-top topCard" src="..." alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
