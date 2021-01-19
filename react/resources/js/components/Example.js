import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <header className="mb-auto">
            <div>
                <h3 className="float-md-start mb-0">Cover</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Contact</a>
                </nav>
            </div>
            <button type="button" classname="btn btn-primary">Primary</button>
            <button type="button" classname="btn btn-secondary">Secondary</button>
        </header>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
