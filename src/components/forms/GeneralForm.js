import React from 'react';

class GeneralForm extends React.Component {
    constructor(props){
        super(props)
    }
	render() {
		return (
			<div>
				<h1>GeneralFrom</h1>
				<form>
					<input type="text" placeholder="Name"></input>
					<input type="email" placeholder="Email"></input>
					<input type="number" placeholder="Phone"></input>
				</form>
			</div>
		);
	}
}

export default GeneralForm;
