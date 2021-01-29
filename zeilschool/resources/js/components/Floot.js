import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Floot() {
    return (
        <div className="Main color1">
            <div className="container pb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-md-center mpt mb-3">
                    <div className="col">
                        <a className="card pb-4 mt-3 cardHover Tdark inset" href="/boot/0">
                            <img className="card-img-top topCard2" src="/images/boot0.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text textHeight"><h4>Passing Wind</h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec est ut lorem efficitur scelerisque quis quis ipsum. Duis pulvinar aliquet</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a className="card pb-4 mt-3 cardHover Tdark inset" href="/boot/1">
                            <img className="card-img-top topCard2" src="/images/boot1.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text textHeight"><h4>Scheeprecht</h4> dolor, et mollis ex tincidunt id. In at velit ut enim condimentum dictum. Duis in sapien est. Cras erat augue, consectetur efficitur semper et,</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a className="card pb-4 mt-3 cardHover Tdark inset" href="/boot/2">
                            <img className="card-img-top topCard2" src="/images/boot2.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text textHeight"><h4>About Time</h4> venenatis sit amet dolor. Quisque condimentum mauris quis odio sodales porta. Pellentesque mollis, nisi et pretium egestas, augue ipsum</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a className="card pb-4 mt-3 cardHover Tdark inset" href="/boot/3">
                            <img className="card-img-top topCard2" src="/images/boot3.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text textHeight"><h4>Synergy</h4> sodales risus, porta tincidunt ante purus et diam. Quisque finibus venenatis congue. Aliquam posuere finibus urna et porttitor.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a className="card pb-4 mt-3 cardHover Tdark inset" href="/boot/4">
                            <img className="card-img-top topCard2" src="/images/boot4.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text textHeight"><h4>Paradise</h4> Suspendisse a elit ut risus hendrerit vestibulum quis a lectus. Nulla et semper lacus. Ut tellus lacus, aliquet ac arcu sit amet, laoreet facilisis</p>
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
