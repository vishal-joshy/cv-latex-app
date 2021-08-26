import React from 'react';

class GeneralForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			number: '',
		};
		this.updateName = this.updateName.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
		this.updateNumber = this.updateNumber.bind(this);
		this.sendDataToApp = this.sendDataToApp.bind(this);
	}

	updateName(e) {
		this.setState({
			name: e.target.value,
		});
		this.sendDataToApp();
	}

	updateEmail(e) {
		this.setState({
			email: e.target.value,
		});
		this.sendDataToApp();
	}

	updateNumber(e) {
		this.setState({
			number: e.target.value,
		});
		this.sendDataToApp();
	}

	sendDataToApp() {
		this.props.getGeneralData(this.state);
	}

	render() {
		return (
			<div>
				<h1>General From</h1>
				<form>
					<input type="text" placeholder="Name" onChange={this.updateName}></input>
					<input type="email" placeholder="Email" onChange={this.updateEmail}></input>
					<input type="number" placeholder="Phone" onChange={this.updateNumber}></input>
				</form>
			</div>
		);
	}
}

export default GeneralForm;
