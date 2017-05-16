import React from 'react';

const componentStyle = {
	container:{

	}
};

class ProductHighlights extends React.PureComponent{
	render(){	
		return (
            <div style={componentStyle.container}>
                {
					this.props.HighLights.features.map((eachFeature)=>{
						return <div>{eachFeature}</div>;
					})
				}
            </div>
		);
	}
}

export default ProductHighlights;