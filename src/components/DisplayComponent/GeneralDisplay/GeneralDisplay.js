import React from 'react';

function GeneralDisplay({ generalData }) {
	return (
		<div>
			<h1>GeneralDisplay</h1>
			<div>Name:{generalData.name}</div>
			<div>Email:{generalData.email}</div>
			<div>Phone:{generalData.phone}</div>
		</div>
	);
}

export default GeneralDisplay;
