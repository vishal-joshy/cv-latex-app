import React from 'react';
import EducationForm from './components/forms/EducationForm';
import GeneralForm from './components/forms/GeneralForm';
import ExperienceForm from './components/forms/ExperienceForm';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<GeneralForm handleEvent={this.handleEvent} />
				<EducationForm />
				<ExperienceForm />
			</div>
		);
	}
}

export default App;
