import { combineReducers } from 'redux';
import { user } from './userReducer';
import { filter } from './filterReducer';
import { task  } from './taskReducer';

const rootReducer = combineReducers({
    user,
    filter,
    task
});

export default rootReducer;