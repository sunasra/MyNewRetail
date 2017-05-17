import React from 'react';
import './index.css'

const componentStyle = {
	container:{
		marginTop:25
	},
	phtitle:{
		fontWeight:400,
		fontSize:30
	}
};

class ProductHighlights extends React.PureComponent{
	 createMarkup(val) {
	  return {__html: val};
	}

	render(){	
		return (
            <div className='product-highlights' style={componentStyle.container}>
				<h2 style={componentStyle.phtitle}>product hightlights</h2>
				<ul>
                {
					this.props.HighLights.features.map((eachFeature, index)=>{
						return <li key={index} dangerouslySetInnerHTML={this.createMarkup(eachFeature)} />;
					})
				}
				</ul>
            </div>
		);
	}
}

export default ProductHighlights;