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
		this.handleForm = this.handleForm.bind(this);
	}

	updateName(e) {
		this.setState({
			name: e.target.value,
		});
	}
	updateEmail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	updateNumber(e) {
		this.setState({
			number: e.target.value,
		});
	}
	handleForm(e) {
		e.preventDefault();
		const generalData = {
			name: this.state.name,
			email: this.state.email,
			number: this.state.number,
		};
		this.props.getGeneralData(generalData);
	}

	render() {
		return (
			<div>
				<h1>General From</h1>
				<form>
					<input type="text" placeholder="Name" onChange={this.updateName}></input>
					<input type="email" placeholder="Email" onChange={this.updateEmail}></input>
					<input type="number" placeholder="Phone" onChange={this.updateNumber}></input>
					<button type="submit" onClick={this.handleForm}>
						submit
					</button>
				</form>
			</div>
		);
	}
}

export default GeneralForm;
