import React from 'react';
import Actions from './Actions';
import Offers from './Offers';
import Price from './Price';
import Quantity from './Quantity';
import ProductHightlights from './ProductHightlights';


class RightComponent extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <div {...this.props}>
                <Price OfferPrice = {this.props.productData.Offers[0].OfferPrice[0]}/>
                <Offers Promotions={this.props.productData.Promotions} />
                <Quantity  />
                <Actions purchasingChannelCode={this.props.productData.purchasingChannelCode} />
                <ProductHightlights HighLights={this.props.productData.ItemDescription[0]}/>
            </div>
		);
	}
}

export default RightComponent;