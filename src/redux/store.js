import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger({
    predicate: (getState, action) => __DEV__
});

function configureStore() {
    return compose(applyMiddleware(loggerMiddleware, thunkMiddleware));
}

const defaultState = {
    history: [],
    profile: {
        usernameInvalid: false,
        loading: false,
        notFound: false,
        user: null
    }
};

export default createStore(reducers, defaultState, configureStore());