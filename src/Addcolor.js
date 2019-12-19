import React from 'react';
import {connect} from  'react-redux';
import {addDetails} from './redux/action/colorcardActionCreator'

class Addcolor extends React.Component {
    constructor(props) {
        super(props);
        this.myInput= React.createRef();
        this.myColor= React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addDetails(this.myInput.current.value , this.myColor.current.value);
        this.myInput.current.value = '';
    }
    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" placeholder="color title..." className="form-control" ref={this.myInput}/>
                <input type="color" className="select-colo colorPicker" ref={this.myColor}/>
                <input type="submit" value="ADD" className="submitBtn" />
            </form>
        );
    }

}

export default connect (null, {addDetails})(Addcolor)

