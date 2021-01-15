import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">
            this is a sample react component 2
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
