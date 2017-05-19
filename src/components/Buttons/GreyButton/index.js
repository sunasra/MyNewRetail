import React from 'react';

class GreyButton extends React.PureComponent{

    render(){
        const { btnText, onClick } = this.props;
        return <button className='greyBtn' onClick={onClick}>{btnText}</button>
    }
}

export default GreyButton