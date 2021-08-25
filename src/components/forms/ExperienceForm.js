import React from 'react';

class ExperienceForm extends React.Component {
	render() {
		return (
			<div>
				<h1>Experience Form</h1>
                <form>
					<input type="text" placeholder="Company Name"></input>
					<input type="text" placeholder="Position"></input>
					<input type="text" placeholder="Year"></input>
				</form>
			</div>
		);
	}
}

export default ExperienceForm;
