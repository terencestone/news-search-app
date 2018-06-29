import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'
import * as reducers from './reducers'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers(reducers)

  return configureStore(rootReducer, rootSaga)
}
