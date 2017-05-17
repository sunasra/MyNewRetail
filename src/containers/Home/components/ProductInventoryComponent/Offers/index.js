import React from 'react';

const componentStyle = {
	eachPromo:{
		fontSize:14,
		fontWeight:300,
		color:'#c00',
		lineHeight:1.5
	},
	container:{
		marginTop:10,
		paddingTop:10,
		paddingBottom:10,
		borderTop:'thin solid #ddd',
		borderBottom:'thin solid #ddd'
	}
};

class Offers extends React.PureComponent{
	render(){
		return (
			<div style={componentStyle.container}>
			{
				 this.props.Promotions.map((offer, index) =>
					<div key={index} style={componentStyle.eachPromo}>{offer.Description[0].shortDescription.toLowerCase()}</div>
				)
			}
            </div>
		);
	}
}

export default Offers;