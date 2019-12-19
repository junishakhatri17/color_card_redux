import React from 'react';
import {connect} from 'react-redux';
import {removeCard} from './redux/action/colorcardActionCreator';
import StarRating from './StarRating';
import { DEL_CARD } from './redux/action/constants';

class Card extends React.Component {

    removeCardDetails() {
    let removeItem = this.props.item;
    //console.log("index====-----",this.props.item);
    this.props.removeCard(removeItem);
   
}
render() {
        return (
            <div className = "card">
                <span className="card-title">{this.props.val.text}</span>
                <button type="button" className="close" aria-label="Close" onClick={() => this.removeCardDetails()}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="card-bgcolor"style={{backgroundColor: this.props.val.value}}></div>
                <StarRating />
            </div>   
        );
    }
}

export default connect (null, {removeCard})(Card)


