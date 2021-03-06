import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Router, Route } from 'react-router';
import reducer from './reducers';
import Root from './components/Root'

const store = createStore(reducer);

render(
  <Root store={store} />,
  document.getElementById('root')
);
