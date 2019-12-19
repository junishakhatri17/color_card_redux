import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addRating} from './redux/action/colorcardActionCreator'


class Star extends React.Component {

onStarClick(index) {
    this.props.addRating(index);  
}

render() {
return (
  <span className = "stars">
    <span className={`fa fa-star fa-2x ${this.props.selectedState}`}  onClick= {() => this.onStarClick(this.props.val)}></span>
  </span>
);
}
}

 export default connect (null, {addRating})(Star)