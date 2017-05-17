import React from 'react';

const componentStyles = {
	price: {
		fontSize:28,
		fontWeight:600
	},
	priceQualifier:{
		fontSize:10,
		color:'grey',
	},
	priceContainer:{
		marginBottom:35
	}
};

class Price extends React.PureComponent{
	render(){
		return (
            <div style={componentStyles.priceContainer}>
                <span style={componentStyles.price}>{this.props.OfferPrice.formattedPriceValue}</span>
				<span style={componentStyles.priceQualifier}>{this.props.OfferPrice.priceQualifier}</span>
            </div>
		);
	}
}

export default Price;