import React from 'react';
import Rating from '../Rating';

const componentStyle = {
	head:{

	},
	mostHelpFul:{
		fontSize: 13,
    	marginBottom: 15,
    	color: 'grey',
    	fontWeight: 400,
		lineHeight:1.2
	},
	container :{		
		backgroundColor:'#eee',
		padding:'10px 20px',
		clear:'both',
		borderRadius:3
	},
	displayFlex:{
		display:'flex',
	},
	flex:{
		flex:1
	},
	border:{
		marginBottom: 10,
    	borderBottom: 'thin solid #ddd'
	},
	title:{
		fontWeight:'bold',
		fontSize:15,
		lineHeight:1.5
	},
	detail:{
		color:'#2d2d2d',
		fontSize:12,
		lineHeight:1.4
	},
	by:{
		fontSize:12,
	},
	at:{
		fontSize:12,
		color:'#2d2d2d',
	},
	author:{
		marginTop:10
	}
};

const Review = ({data}) =>{
	return <div style={componentStyle.flex}>
				<div><Rating editing={false} rating={data.overallRating}/></div>
				<div style={componentStyle.title}>{data.title}</div>
				<div style={componentStyle.detail}>{data.review}</div>
				<div style={componentStyle.author}>
					<a style={componentStyle.by} href='#'>{data.screenName}</a>
					<span style={componentStyle.at}>{data.datePosted}</span>
				</div>
			</div>
} 
const Title = ({data, title}) => (
	<div style={componentStyle.flex}>
		<div style={componentStyle.head}>{title}</div>
		<div style={componentStyle.mostHelpFul}>most helpful {data.overallRating} star review</div>
	</div>
);

class DetailReviews extends React.PureComponent{
	
	render(){
		return (
            <div style={componentStyle.container} >
				<div style={{...componentStyle.displayFlex, ...componentStyle.border}}>
					<Title data={this.props.CustomerReview[0].Pro[0]} />
					<Title data={this.props.CustomerReview[0].Con[0]} />
				</div>
				<div style={{...componentStyle.displayFlex}}>
					<Review data={this.props.CustomerReview[0].Pro[0]}/>
					<Review data={this.props.CustomerReview[0].Con[0]}/>
				</div>
            </div>
		);
	}
}

export default DetailReviews;