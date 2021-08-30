import React, { useState, useEffect } from 'react';

function GeneralForm({ getGeneralData }) {
	const [generalData, setGeneralData] = useState({ name: '', email: '', phone: '' });

	useEffect(() => {
		getGeneralData(generalData);
		return () => {};
	}, [generalData]);

	const handleInput = (e) => {
		let values = { ...generalData };
		values[e.target.name] = e.target.value;
		setGeneralData(values);
	};

	return (
		<div>
			<h1>GeneralForm</h1>
			<input name="name" type="text" placeholder="Name" onChange={handleInput}></input>
			<input name="email" type="text" placeholder="Email" onChange={handleInput}></input>
			<input name="phone" type="text" placeholder="Phone" onChange={handleInput}></input>
		</div>
	);
}

export default GeneralForm;
