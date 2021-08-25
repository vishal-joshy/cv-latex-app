import React from 'react';

class General extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, email, number } = this.props.data;
		console.log(this.props);
		return (
			<div>
				<h1>Personal Details</h1>
				<div>
					<div>{name}</div>
					<div>{email}</div>
					<div>{number}</div>
				</div>
			</div>
		);
	}
}
export default General;
