import React from 'react';

class EducationForm extends React.Component {
	render() {
		return (
			<div>
				<h1>EducationForm</h1>
                <form>
					<input type="text" placeholder="School Name"></input>
					<input type="text" placeholder="Course"></input>
					<input type="text" placeholder="Year"></input>
				</form>
			</div>
		);
	}
}

export default EducationForm;
