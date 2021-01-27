import { divide } from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Boot extends Component {

	constructor(props) {
		super(props);
		this.state = {
			boot : document.getElementById('BootNum').value,
			name : ["Test1","Test2"],
		}
	}

	render() {
		return (
			<div>
				{this.state.boot}
				test
			</div>	
		);
	};

}

export default Boot;

if(document.getElementById('boot')) {
	ReactDOM.render(<Boot />, document.getElementById('boot'));
}


