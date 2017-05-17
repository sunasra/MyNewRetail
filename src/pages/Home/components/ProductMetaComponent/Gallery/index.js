import React from 'react';
import Slider from 'react-slick'
import './index.css'

const componentStyle = {
	primaryImage : {
		maxWidth:'100%',
		marginBottom:60
	},
	galleryContainer:{
		textAlign:'center',
		marginTop:40
	}
}

class Gallery extends React.PureComponent{
	constructor(props){
		super(props)
		this.state = {
			currentPrimaryImage:this.props.images[0].PrimaryImage[0].image
		}
	}
	changePrimaryImage(e){
		this.setState({
			currentPrimaryImage:this.props.images[0].AlternateImages[e.target.dataset.index].image
		})
	}
	render(){
		const settings = {
			dots:false,
			infinite: false,
			slidesToShow:3,
			slidesToScroll:1
		}
		return (
            <div style={componentStyle.galleryContainer}>
                <img src={this.state.currentPrimaryImage} style={componentStyle.primaryImage}/>
				<div className='slider-container'>
					<Slider {...settings} >
						{
							this.props.images[0].AlternateImages.map((eachImage, index)=>{
								return <img key={index} onClick={this.changePrimaryImage.bind(this)} src={eachImage.image} />
							})
						}
					</Slider>
				</div>
            </div>
		);
	}
}

export default Gallery;