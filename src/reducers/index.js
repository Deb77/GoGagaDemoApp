import likes from './likes';
import dislikes from './dislikes';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    likes,
    dislikes
})

export default allReducers;