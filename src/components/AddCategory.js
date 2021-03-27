import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState(''); //string vacio

	const handleInputValue = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			setCategories((cats) => [inputValue, ...cats]);
			setInputValue('');
		}
	};
	return (
		// <Fragment> //Utilzar fragment si los elementos no estan agrupados por un form
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} onChange={handleInputValue} />
		</form>
		// </Fragment>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired, //Funcion requerida
};

export default AddCategory;
