import React from 'react';
import DetailReviews from './DetailReviews';
import Rating from './Rating';

const componentStyle={
	rating:{
		float: 'left'
	},
	viewall:{
		float:'right',
		lineHeight:2.4
	},
	overall:{
		lineHeight:2.4,
		marginLeft:5
	}
}

class Review extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <div>                
                <div>
					<div style={componentStyle.rating}>
						<Rating editing={false} style={{fontSize:30, float:'left'}} rating={this.props.CustomerReview[0].consolidatedOverallRating} />
						<span style={componentStyle.overall} >overall</span>
					</div>
                	<div style={componentStyle.viewall}>view all reviews</div>
				</div>
                <DetailReviews {...this.props}/>
            </div>
		);
	}
}

export default Review;
