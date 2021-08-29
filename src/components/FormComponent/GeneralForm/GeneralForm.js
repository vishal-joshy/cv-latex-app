import React, { useState } from 'react';

function GeneralForm({ getGeneralData }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const handleName = (e) => {
		setName(e.target.value);
		getGeneralData({ name: name, email: email, phone: phone });
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
		getGeneralData({ name: name, email: email, phone: phone });
	};
	const handlePhone = (e) => {
		setPhone(e.target.value);
		getGeneralData({ name: name, email: email, phone: phone });
	};

	return (
		<div>
			<h1>GeneralForm</h1>
			<input type="text" placeholder="Name" onChange={handleName}></input>
			<input type="text" placeholder="Email" onChange={handleEmail}></input>
			<input type="text" placeholder="Phone" onChange={handlePhone}></input>
		</div>
	);
}

export default GeneralForm;
