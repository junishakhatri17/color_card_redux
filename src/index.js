import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ColorCardComp from './ColorCardComp';
import createStore from './redux/store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={createStore}><ColorCardComp /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
