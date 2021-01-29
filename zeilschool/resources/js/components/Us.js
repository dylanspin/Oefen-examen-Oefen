import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Us() {
    return (
        <div className="jumbotron white">
            <div className="container">
              
            </div>
        </div>
    );
}

export default Us;

if (document.getElementById('ons')) {
    ReactDOM.render(<Us />, document.getElementById('ons'));
}
