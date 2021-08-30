import React, { useState, useEffect, useCallback } from 'react';

function GeneralForm({ getGeneralData }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	useEffect(() => {
		getGeneralData({ name: name, email: email, phone: phone });
		return () => {};
	}, [name, email, phone]);

	const handleName = useCallback((e) => {
		setName(e.target.value);
	}, []);
	const handleEmail = useCallback((e) => {
		setEmail(e.target.value);
	}, []);
	const handlePhone = useCallback((e) => {
		setPhone(e.target.value);
	}, []);

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
