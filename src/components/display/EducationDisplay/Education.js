import React from 'react';

class Education extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		console.log(this.props.data)
		const { schoolName,course,year} = this.props.data;
		return (
			<div>
				<h1>Education Details</h1>
				<div>
					<div>{schoolName}</div>
					<div>{course}</div>
					<div>{year}</div>
				</div>
			</div>
		);
	}
}
export default Education;
