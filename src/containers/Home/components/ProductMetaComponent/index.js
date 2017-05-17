import React from 'react';
import ProductTitle from './ProductTitle';
import Gallery from './Gallery';


class ProductMetaComponent extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
    <div {...this.props}>
        <ProductTitle title={this.props.productData.title} />
        <Gallery images={this.props.productData.Images} />
    </div>
		);
	}
}

export default ProductMetaComponent;
