import React from 'react';
import EducationForm from './components/forms/EducationForm';
import GeneralForm from './components/forms/GeneralForm';
import ExperienceForm from './components/forms/ExperienceForm';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.getGeneralData = this.getGeneralData.bind(this);
	}

	getGeneralData(data) {
		console.log(data);
	}

	render() {
		return (
			<div>
				<GeneralForm getGeneralData={this.getGeneralData} />
				<EducationForm />
				<ExperienceForm />
			</div>
		);
	}
}

export default App;
