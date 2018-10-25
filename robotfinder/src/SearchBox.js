import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className ='pa2'>
		<input
			className='bg-light-pink ba pa3 shadow-2'
			type='search' 
			placeholder='search robots'
			onChange={searchChange}
		/>
		</div>
	);
}

export default SearchBox;