import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function BootHuren() {
    return (
        <div className="jumbotron white">
            <div className="container">
                <h1 className="jumbotron-heading">Lessen</h1>
                <p className="lead text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget odio tellus.
                    Donec consequat felis pellentesque, faucibus mi a, accumsan nunc. Cras 
                </p>
                <h1 className="jumbotron-heading mt-5">Dagje uit</h1>
                <p className="lead text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget odio tellus.
                    Donec consequat felis pellentesque, faucibus mi a, accumsan nunc. Cras 
                </p>
                <h1 className="jumbotron-heading mt-5">Vakantie</h1>
                <p className="lead text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget odio tellus.
                    Donec consequat felis pellentesque, faucibus mi a, accumsan nunc. Cras 
                </p>
            </div>
        </div>
    );
}

export default BootHuren;

if (document.getElementById('huren')) {
    ReactDOM.render(<BootHuren />, document.getElementById('huren'));
}
