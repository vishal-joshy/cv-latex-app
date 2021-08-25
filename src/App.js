import React from 'react';
import EducationForm from './components/forms/EducationForm';
import GeneralForm from './components/forms/GeneralForm';
import ExperienceForm from './components/forms/ExperienceForm';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.getGeneralData = this.getGeneralData.bind(this);
		this.displayContents = this.displayContents.bind(this);
		this.getEducationData = this.getEducationData.bind(this);
	}

	getGeneralData(data) {
		console.log(data);
	}
	getEducationData(data) {
		console.log(data);
	}
	displayContents() {
		console.log('display CV');
	}

	render() {
		return (
			<div>
				<GeneralForm getGeneralData={this.getGeneralData} />
				<EducationForm getEducationData={this.getEducationData} />
				<ExperienceForm />
				<button onClick={this.displayContents}>Submit</button>
			</div>
		);
	}
}

export default App;
