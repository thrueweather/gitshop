import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/';
import App from './components/App';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootEl = document.getElementById('root');


const render = () => ReactDOM.render(
    <Provider store={store}>
        <App value={store.getState()}/>
    </Provider>,
    rootEl
)

render()
store.subscribe(render)