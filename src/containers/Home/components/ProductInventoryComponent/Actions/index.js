import React from 'react';
import CTAButton from '../../../../../components/Buttons/CTA';
import GreyButton from '../../../../../components/Buttons/GreyButton';

const componentStyle={
	addToCart:{
		marginLeft:10
	},
	ctaContainer:{
		marginBottom:10
	}
}

class Actions extends React.PureComponent{
	pickUpStore(){

	}
	addToCart(){
		
	}
	addToRegistory(){

	}
	addToList(){

	}
	share(){

	}
	render(){
		return (
            <div>
				<div style={componentStyle.ctaContainer}>
					{
					this.props.purchasingChannelCode === '2' ?
						<CTAButton id='pickUpStore' type='pickupstore' onClick={this.pickUpStore} buttonTxt='PICK UP IN STORE' />
					: null
				}
                
				{
					this.props.purchasingChannelCode === '1' ?
						<CTAButton style={componentStyle.addToCart} id='addToCart' type='addtocart' onClick={this.addToCart} buttonTxt='ADD TO CART' />
					: null
				}
				</div>
				<div>
					<GreyButton onClick={this.addToRegistory} btnText={'ADD TO REGISTRY'}></GreyButton>
					<GreyButton onClick={this.addToList} btnText={'ADD TO LIST'}></GreyButton>
					<GreyButton onClick={this.share} btnText={'SHARE'}></GreyButton>
				</div>

            </div>
		);
	}
}

export default Actions;