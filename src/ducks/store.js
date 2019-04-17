import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './userReducer'
import promiseMiddleware from 'redux-promise-middleware'
import nutritionReducer from './nutritionReducer'

const rootReducer = combineReducers({
    nutritionReducer,
    userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))