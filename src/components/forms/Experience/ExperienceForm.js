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
		this.sendDataToApp = this.sendDataToApp.bind(this);
	}

	updateCompanyName(e) {
		this.setState({
			companyName: e.target.value,
		});
		this.sendDataToApp();
	}
	updatePosition(e) {
		this.setState({
			position: e.target.value,
		});
		this.sendDataToApp();
	}

	updateYear(e) {
		this.setState({
			year: e.target.value,
		});
		this.sendDataToApp();
	}

	sendDataToApp() {
		this.props.getExperienceData(this.state);
	}

	render() {
		return (
			<div>
				<h1>Experience Form</h1>
				<form>
					<div className="form-group">
						<input
							className="form-control"
							type="text"
							placeholder="Company Name"
							onChange={this.updateCompanyName}
						></input>
						<input
							className="form-control"
							type="text"
							placeholder="Position"
							onChange={this.updatePosition}
						></input>
						<input
							className="form-control"
							type="text"
							placeholder="Year"
							onChange={this.updateYear}
						></input>
					</div>
				</form>
			</div>
		);
	}
}

export default ExperienceForm;
