import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Redux comps
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
//
import Routes from './routes'
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));

