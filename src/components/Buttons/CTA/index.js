import React from 'react';

const componentStyle = {
	pickupStore:{
		background: '#8d8e99',
		border:'transparent',
		backgroundImage: 'linear-gradient(to bottom, #8d8e99, #333)',
		borderRadius: 2,
		color: '#ffffff',
		fontSize: 20,
		padding: '10px 20px 10px 20px',
		textDecoration: 'none'
	},
	addToCart:{
		background: '#f71818',
		border:'transparent',
		backgroundImage: 'linear-gradient(to bottom, #f71818, #c00)',
		borderRadius: 2,
		color: '#ffffff',
		fontSize: 20,
		padding: '10px 20px 10px 20px',
		textDecoration: 'none'
}
};

class CTA extends React.PureComponent{
	render(){
		const style = {
		...this.props.style,
		...this.props.type === 'addtocart' ? componentStyle.addToCart : componentStyle.pickupStore	
	}
		return <button {...this.props} style={style} onClick={this.props.onClick}>{this.props.buttonTxt}</button>;
	}
}

export default CTA;