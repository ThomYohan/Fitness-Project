import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './userReducer'
import promiseMiddleware from 'redux-promise-middleware'
import nutritionReducer from './nutritionReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import profileReducer from './profileReducer'
import chartReducer from './chartReducer'

const rootReducer = combineReducers({
    nutritionReducer,
    userReducer,
    profileReducer,
    chartReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))