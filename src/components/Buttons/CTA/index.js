import React from 'react';
import './index.css'
class CTA extends React.PureComponent{
	render(){
		const className = this.props.type === 'addtocart' ? 'btn addToCart' : 'btn pickupStore';
		return <button className={className} {...this.props} style={this.props.style} onClick={this.props.onClick}>{this.props.buttonTxt}</button>;
	}
}

export default CTA;