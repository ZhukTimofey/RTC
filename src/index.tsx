import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {store} from "./app/store"
import { Provider } from 'react-redux';
import Meetups from "./Meetups"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Meetups/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


