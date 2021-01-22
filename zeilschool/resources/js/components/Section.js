import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Section() {
    return (
        <div className="jumbotron pb-5 color2">
            <div className="container grayText pb-5">
                <div className="row">
                    <div className="col mr-5">
                        <h1>Wie zijn wij</h1>
                        <h5>fuihsuidfb shjfuis nsuidfn hfiud fhusidf uifhbs dbfus fnbusifb  jishbfs fdbufbsn cbsudfb</h5>
                        <p className="small">some more random </p>
                    </div>
                    <div className="col ml-5">
                        <h1>Wie zijn wij</h1>
                        <h5>fuihsuidfb shjfuis nsuidfn hfiud fhusidf uifhbs dbfus fnbusifb  jishbfs fdbufbsn cbsudfb</h5>
                        <p className="small">some more random </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;

if (document.getElementById('section')) {
    ReactDOM.render(<Section />, document.getElementById('section'));
}
