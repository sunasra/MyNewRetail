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

class DetailReviews extends React.PureComponent{
	
	render(){
		return (
            <div style={componentStyle.container} >
				<div style={{...componentStyle.displayFlex, ...componentStyle.border}}>
					<div style={componentStyle.flex}>
						<div style={componentStyle.head}>PRO</div>
						<div style={componentStyle.mostHelpFul}>most helpful {this.props.CustomerReview[0].Pro[0].overallRating} star review</div>
					</div>
					<div style={componentStyle.flex}>
						<div style={componentStyle.head}>CON</div>
						<div style={componentStyle.mostHelpFul}>most helpful {this.props.CustomerReview[0].Con[0].overallRating} star review</div>
					</div>
				</div>
				<div style={{...componentStyle.displayFlex}}>
					<div style={componentStyle.flex}>
						<div><Rating editing={false} rating={this.props.CustomerReview[0].Pro[0].overallRating}/></div>
						<div style={componentStyle.title}>{this.props.CustomerReview[0].Pro[0].title}</div>
						<div style={componentStyle.detail}>{this.props.CustomerReview[0].Pro[0].review}</div>
						<div style={componentStyle.author}><a style={componentStyle.by} href='#'>{this.props.CustomerReview[0].Pro[0].screenName}</a> <span style={componentStyle.at}>{this.props.CustomerReview[0].Pro[0].datePosted}</span></div>
					</div>
					<div style={componentStyle.flex}>
						<div><Rating editing={false} rating={this.props.CustomerReview[0].Con[0].overallRating}/></div>
						<div style={componentStyle.title}>{this.props.CustomerReview[0].Con[0].title}</div>
						<div style={componentStyle.detail}>{this.props.CustomerReview[0].Con[0].review}</div>
						<div style={componentStyle.author}><a style={componentStyle.by} href='#'>{this.props.CustomerReview[0].Con[0].screenName}</a> <span style={componentStyle.at}>{this.props.CustomerReview[0].Con[0].datePosted}</span></div>
					</div>
				</div>
            </div>
		);
	}
}

export default DetailReviews;