import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import laptopReducer from './reducers/laptopReducer'
import mobileReducer from './reducers/mobileReducer'
import usersReducer from './reducers/usersReducer'

const rootReducer = combineReducers({
    laptops: laptopReducer,
    mobiles: mobileReducer,
    users: usersReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, logger))
export default store