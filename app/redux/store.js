import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import reducers from './reducer/index'


const store = () => {
    if (process.env.NODE_ENV === 'development') {
        return createStore(
            reducers,
            compose(
                applyMiddleware(ReduxThunk),
                applyMiddleware(logger)
            )
        )
    } else {
        return createStore(
            reducers,
            compose(
                applyMiddleware(ReduxThunk)
            )
        )
    }
};

export default store