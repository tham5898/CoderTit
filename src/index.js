import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import List from './Component/List';
import './index.css';
import myReducer from './Reducer/index';
import * as serviceWorker from './serviceWorker';


import 'jquery';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/bootstrap/dist/js/bootstrap';
import TaskFrom from './Component/TaskFrom';

const store = createStore(myReducer)
ReactDOM.render(
    <Provider store={store}>
        <div className="container" style={{paddingTop:50}}>

        <TaskFrom/>
        <List/>
        </div>
     
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
