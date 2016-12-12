import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(rootReducer, middleware);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;