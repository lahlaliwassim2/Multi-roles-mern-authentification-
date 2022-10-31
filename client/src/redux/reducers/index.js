import { combineReducers } from 'redux'

import authReducerducer from './authReducer'
import errorsReducer from './errorsReducer'


export default combineReducers({
    auth : authReducerducer,
    errors: errorsReducer
})