import {ADD_COLOR , DEL_CARD, ADD_RATING, ADD_SORTING} from './constants';
let counter = 0;
let ratings = 0;

export function addDetails(_text, _value) {
    let colors = {id : counter , text: _text, value : _value, ratings: ratings};
    console.log("staeeeeeee",colors);
    counter++;
    return {
        type: ADD_COLOR,
        payload: colors
    }

}

export function removeCard(_id) {
    let colors = {id : _id};
    return {
        type: DEL_CARD,
        payload: _id
    }

}
export function addRating(_num, _counter) {
    let colors = {id: _counter , ratings : _num};
    counter++;
    console.log("staeeeeeee000",colors);
    return {
        type: ADD_RATING,
        payload: colors
    }

}

export function addSorting(_id) {
    let colors = {id : _id};
    console.log("staeeeeeee",colors);
    return {
        type: ADD_SORTING,
        payload: colors
    }

}


export default {addDetails, removeCard, addRating, addSorting};