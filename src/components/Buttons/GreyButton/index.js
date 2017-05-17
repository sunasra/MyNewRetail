import React from 'react';
import './index.css'

class GreyButton extends React.PureComponent{

    render(){
        const { btnText, onClick } = this.props;
        return <button className='greyBtn' onClick={onClick}>{btnText}</button>
    }
}

export default GreyButton