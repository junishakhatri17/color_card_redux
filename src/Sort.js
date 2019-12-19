import React from 'react';
import {connect} from 'react-redux';
import {addSorting} from './redux/action/colorcardActionCreator'
 


class Sort extends React.Component {
    onSortClick(optnval) {
        console.log("------sorting",optnval);
        switch(optnval) {
            case "1":
                let colors = this.props.colors;
                console.log("index====-----",this.props.colors);
                //colors.sort((a, b) => (a.text > b.text) ? 1 : -1);
                break;
            case "2": 
                break;
            case "3":
                break;
            case "4":
                break;
        }
    }
    render(){
        return(
            <div className="">
                <select id="selectOptn" className="form-control sortingComp" onChange={(e) => this.onSortClick(document.getElementById("selectOptn").value)}>
                <option selected="selected" disabled>Sort your list</option>
                    <option value="1">Name a-z</option>
                    <option value="2">Name z-a</option>
                    <option value="3">Rating 0-5</option>
                    <option value="4">Rating 5-0</option>
                </select>
            </div>
        );
    }
}

export default connect (null, {addSorting})(Sort)