import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Rating extends React.PureComponent{
	render(){
		return (
            <div className={this.props.className} style={this.props.style}>
                <StarRatingComponent
                    name="rate1" 
                    starCount={5}
					starColor='#c00'
                    value={Number(this.props.rating)}
                    editing={this.props.editing}
                />
            </div>
		);
	}
}

export default Rating;