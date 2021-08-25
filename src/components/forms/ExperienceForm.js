import React from 'react';

class ExperienceForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			companyName: '',
			position: '',
			year: '',
		};

		this.updateCompanyName = this.updateCompanyName.bind(this);
		this.updatePosition = this.updatePosition.bind(this);
		this.updateYear = this.updateYear.bind(this);
		this.handleForm = this.handleForm.bind(this);
	}

	updateCompanyName(e) {
		this.setState({
			companyName: e.target.value,
			position: this.state.position,
			year: this.state.year,
		});
	}
	updatePosition(e) {
		this.setState({
			companyName: this.state.companyName,
			position: e.target.value,
			year: this.state.year,
		});
	}

	updateYear(e) {
		this.setState({
			companyName: this.state.companyName,
			position: this.state.position,
			year: e.target.value,
		});
	}

	handleForm(e) {
		e.preventDefault();
		const experienceData = {
			companyName: this.state.companyName,
			position: this.state.position,
			year: this.state.year,
		};
		this.props.getExperienceData(experienceData);
	}

	render() {
		return (
			<div>
				<h1>Experience Form</h1>
				<form>
					<input type="text" placeholder="Company Name" onChange={this.updateCompanyName}></input>
					<input type="text" placeholder="Position" onChange={this.updatePosition}></input>
					<input type="text" placeholder="Year" onChange={this.updateYear}></input>
					<button type="submit" onClick={this.handleForm}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default ExperienceForm;
