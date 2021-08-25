import React from 'react';

class Experience extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.data);
		const { companyName, position, year } = this.props.data;
		return (
			<div>
				<h1>Experience Details</h1>
				<div>
					<div>{companyName}</div>
					<div>{position}</div>
					<div>{year}</div>
				</div>
			</div>
		);
	}
}
export default Experience;
