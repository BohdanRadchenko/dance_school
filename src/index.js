import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store'
import ReactDOM from 'react-dom';
import App from './components/App';
import './normalize.css'
import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('root'));