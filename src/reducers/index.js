import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import heroes from './heroes';
import comics from './comics';
import visibility from './visibility';

const rootReducer = combineReducers({
    heroes,
    comics,
    visibility,
    routing: routerReducer
});

export default rootReducer;