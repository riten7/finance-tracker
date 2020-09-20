import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/reduxStore';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}
