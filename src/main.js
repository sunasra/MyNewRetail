import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/createStore'
import Home from './pages/Home/components/HomeView'

const store = configureStore()

const MOUNT_NODE = document.getElementById('root')
  render(
    <Provider store={store}>
          <Home />
      </Provider>,
    MOUNT_NODE
  );
