import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';

class CardContainer extends React.Component {
render() {
    console.log("---------sdads---",this.props.colors)
    return(
        <div className="color-lists">
        {
            this.props.colors.map((value, index) => (
                <Card val={value} key={index} item={index}/>
            ))       
        }
    </div>
    );
}

}
function mapStateToProps(state) {
    return {
        colors: state.colors
    }
}

export default connect (mapStateToProps)(CardContainer)