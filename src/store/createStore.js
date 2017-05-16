import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'

const configureStore = (initialState = {}) => createStore(
  makeRootReducer,
  initialState,
  applyMiddleware(thunk)
)

export default configureStore;