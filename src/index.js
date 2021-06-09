import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const store = createStore(reducers, middlewareEnhancer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);