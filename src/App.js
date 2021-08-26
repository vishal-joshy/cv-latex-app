import React from 'react';
import EducationForm from './components/forms/Education/EducationForm';
import GeneralForm from './components/forms/General/GeneralForm';
import ExperienceForm from './components/forms/Experience/ExperienceForm';
import DisplayMain from './components/display/Main';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			generalData: '',
			educationData: '',
			experienceData: '',
			previewMode: false,
		};
		this.getGeneralData = this.getGeneralData.bind(this);
		this.displayContents = this.displayContents.bind(this);
		this.getEducationData = this.getEducationData.bind(this);
		this.getExperienceData = this.getExperienceData.bind(this);
		this.displayData = this.displayData.bind(this);
	}

	getGeneralData(data) {
		this.setState({
			generalData: data,
		});
	}
	getEducationData(data) {
		this.setState({
			educationData: data,
		});
	}
	getExperienceData(data) {
		this.setState({
			experienceData: data,
		});
	}
	displayContents() {
		this.setState({ previewMode: true });
		const data = {
			generalData: this.state.generalData,
			educationData: this.state.educationData,
			experienceData: this.state.experienceData,
		};
		console.log(data);
	}

	displayData() {
		if (this.state.previewMode) {
			return <DisplayMain data={this.state} />;
		} else {
			return <div></div>;
		}
	}

	render() {
		return (
			<div>
				<GeneralForm getGeneralData={this.getGeneralData} />
				<EducationForm getEducationData={this.getEducationData} />
				<ExperienceForm getExperienceData={this.getExperienceData} />
				<button onClick={this.displayContents}>Submit</button>
				<this.displayData />
			</div>
		);
	}
}

export default App;
