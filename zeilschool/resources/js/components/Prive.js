import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Prive() {
    return (
        <div className="jumbotron white">
            <div className="container">
                <h1 className="jumbotron-heading">Prive lessen</h1>
                <p className="lead text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget odio tellus.
                    Donec consequat felis pellentesque, faucibus mi a, accumsan nunc. Cras 
                </p>
            </div>
        </div>
    );
}

export default Prive;

if (document.getElementById('prive')) {
    ReactDOM.render(<Prive />, document.getElementById('prive'));
}
