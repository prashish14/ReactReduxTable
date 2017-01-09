import { createStore, compose } from 'redux'

import listReducer from '../reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(initialState){
  return createStore(listReducer, initialState, composeEnhancers())
}
