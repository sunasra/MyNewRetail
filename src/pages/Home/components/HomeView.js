import React from 'react';
import styles from './HomeView.css';
import ProductMetaComponent from './ProductMetaComponent';
import ProductInventoryComponent from './ProductInventoryComponent';
import ReviewComponent from './ReviewComponent'
import { connect } from 'react-redux';
import { getData } from '../actions';

class HomeView extends React.PureComponent {
	componentDidMount(){
		this.props.getData();  
	}
	render() {
		if(this.props.productData.fetchSuccess){
      	return (
        <div className='productContainer'>
		<div>
          <ProductMetaComponent className='leftSide' productData={this.props.productData.data.CatalogEntryView[0]}/>
          <ProductInventoryComponent className='rightSide' productData={this.props.productData.data.CatalogEntryView[0]} />
        </div>
		<div className='reviewContainer'>
			<ReviewComponent productData={this.props.productData.data.CatalogEntryView[0]} />
		</div>
		</div>
	    );
		}
		return null;	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData : () => dispatch(getData()),
	}
	
};

const mapStateToProps = (state) => ({
	productData : state.productData
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
