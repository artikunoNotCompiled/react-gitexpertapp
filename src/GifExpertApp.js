import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	// const handleAdd = () => {
	// 	setCategories([...categories, 'Gunnm']); // da el mismo resultado
	// 	setCategories((cats) => [...cats, 'Gunmm']);
	// };
	return (
		<Fragment>
			<h1>GifExpertApp</h1>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category) => (
					// <li key={categories}>{categories}</li>
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</Fragment>
	);
};

export default GifExpertApp;
