import React from 'react';
import Star from './star';
import {connect} from 'react-redux';
import {addRating} from './redux/action/colorcardActionCreator'

class StarRating extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    const myArray = [1, 2, 3, 4, 5];

    return(
      <div className="ratingStars"> 
        {myArray.map((value, index) => { 
          return <Star val={value} selectedState={index < this.props.colors ? "selected" : "notselected"} /> ;
      })
  }
  </div>
    );
  }
}

function mapStateToProps(state) {
    //console.log('TodoList:: state', state.colors[0].ratings)
  
}

export default connect (mapStateToProps)(StarRating)