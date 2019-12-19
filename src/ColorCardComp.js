import React from 'react';
import Addcolor from './Addcolor';
import CardContainer from './CardContainer';
import Sort from './Sort';

export default class ColorCardComp extends React.Component {

render() {
    return (
        <div>
            <span className="heading">Color Card App</span>
            <Addcolor />
            <Sort />
            <CardContainer />
        </div>
    );
}
}