import { divide } from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Boot extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name : ["Passing Wind","Scheeprecht","About Time","Synergy","Paradise"],
			test : null,
		}
	}

	render() {
		this.state.test = "/images/boot"+this.props.num+".jpg";
		return (
			<div className="jumbotron color2 pb-5">
				<div className="row">
					<div className="col">
						<div className="sideImage inset">
							<img className="card-img-top fullImage" src={this.state.test} alt="Card image cap"/>
						</div>
					</div>
					<div className="col mr-5 Twhite">
						<h1 className="mb-5">{this.state.name[this.props.num]}</h1>
                        <h5>fuihsuidfb shjfuis nsuidfn hfiud fhusidf uifhbs dbfus fnbusifb  jishbfs fdbufbsn cbsudfb</h5>
						<form action="/boot/send" method="POST">
							<button className="huur d-none d-md-block">Huur Deze Boot</button>
						</form>
					</div>
				</div>
			</div>	
		);
	};

}

export default Boot;

if(document.getElementById('boot')) {
	const propsContainer = document.getElementById("boot");
	const props = Object.assign({}, propsContainer.dataset);
	ReactDOM.render( <Boot {...props} />, document.getElementById("boot") );

}




