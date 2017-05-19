import React from 'react';

const componentStyle = {
	quantityTxt:{
		verticalAlign:'sub',
		color:'#2d2d2d'
	}
}

class Quantity extends React.PureComponent{
	constructor(props){
		super(props)
	}
	render(){
		return (
            <div>
 				 <div className="quantity-input">
					 	 <div style={componentStyle.quantityTxt}>quantity:</div>
                        <span onClick={this.props.handleDecrement}>-</span>
                        <div className='quantity'>{this.props.quantity} </div>
                        <span onClick={this.props.handleIncrement}>+</span>
                </div>
            </div>
		);
	}
}

Quantity.defaultProps = {
  quantity: 1
};

export default Quantity;