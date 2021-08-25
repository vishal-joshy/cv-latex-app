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
		this.handleForm = this.handleForm.bind(this);
	}

	updateSchoolName(e) {
		this.setState({
			schoolName: e.target.value,
			course: this.state.course,
			year: this.state.year,
		});
	}
	updateCourse(e) {
		this.setState({
			schoolName: this.state.schoolName,
			course: e.target.value,
			year: this.state.year,
		});
	}
	updateYear(e) {
		this.setState({
			schoolName: this.state.schoolName,
			course: this.state.course,
			year: e.target.value,
		});
	}
	handleForm(e) {
		e.preventDefault();
		const educationData = {
			schoolName: this.state.schoolName,
			course: this.state.course,
			year: this.state.year,
		};
		this.props.getEducationData(educationData);
	}

	render() {
		return (
			<div>
				<h1>Education Form</h1>
				<form>
					<input type="text" placeholder="School Name" onChange={this.updateSchoolName}></input>
					<input type="text" placeholder="Course" onChange={this.updateCourse}></input>
					<input type="text" placeholder="Year" onChange={this.updateYear}></input>
					<button type="submit" onClick={this.handleForm}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default EducationForm;
