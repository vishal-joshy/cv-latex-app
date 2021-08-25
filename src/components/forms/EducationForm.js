import React from 'react';

class EducationForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			schoolName: '',
			course: '',
			year: '',
		};
		this.updateSchoolName = this.updateSchoolName.bind(this);
		this.updateCourse = this.updateCourse.bind(this);
		this.updateYear = this.updateYear.bind(this);
		this.sendDataToApp = this.sendDataToApp.bind(this);
	}

	updateSchoolName(e) {
		this.setState({
			schoolName: e.target.value,
		});
		this.sendDataToApp();
	}
	
	updateCourse(e) {
		this.setState({
			course: e.target.value,
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
		this.props.getEducationData(this.state);
	}

	render() {
		return (
			<div>
				<h1>Education Form</h1>
				<form>
					<input type="text" placeholder="School Name" onChange={this.updateSchoolName}></input>
					<input type="text" placeholder="Course" onChange={this.updateCourse}></input>
					<input type="text" placeholder="Year" onChange={this.updateYear}></input>
				</form>
			</div>
		);
	}
}

export default EducationForm;
