import React from 'react';
import Review from './Review';


class ReviewComponent extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
        <div {...this.props}>
            <Review CustomerReview = {this.props.productData.CustomerReview} />
        </div>
		);
	}
}

export default ReviewComponent;
