import React from 'react';
const componentStyles = {
	title:{
		fontSize:28,		
		fontWeight:300,
		textAlign:'center'
	}
};
export const ProductTitle = ({title}) => (
    <h1 style={componentStyles.title}>{title}</h1>
);
export default ProductTitle;