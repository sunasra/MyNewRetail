import React from 'react';
import CTAButton from '../../../../../components/Buttons/CTA';

const componentStyle={
	addToCart:{
		marginLeft:10
	}
}

class Actions extends React.PureComponent{
	pickUpStore(){

	}
	addToCart(){
		
	}
	render(){
		return (
            <div>
				{
					this.props.purchasingChannelCode === '0' ?
						<CTAButton id='pickUpStore' type='pickupstore' onClick={this.pickUpStore} buttonTxt='PICK UP IN STORE' />
					: null
				}
                
				{
					this.props.purchasingChannelCode === '0' ?
						<CTAButton style={componentStyle.addToCart} id='addToCart' type='addtocart' onClick={this.addToCart} buttonTxt='ADD TO CART' />
					: null
				}
            </div>
		);
	}
}

export default Actions;