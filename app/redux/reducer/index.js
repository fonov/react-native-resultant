import { combineReducers } from 'redux'
// My reducers
import Stocks from './stocks'


const reducer = combineReducers({
    stocks: Stocks
});

export default reducer