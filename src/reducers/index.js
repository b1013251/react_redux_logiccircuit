import {combineReducers} from 'redux'

import unit from './unit'
import input from './input'

const reducers = combineReducers({
    unit,
    input
})

export default reducers