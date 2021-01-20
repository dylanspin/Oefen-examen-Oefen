import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div>
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-primary">Primary</button>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
