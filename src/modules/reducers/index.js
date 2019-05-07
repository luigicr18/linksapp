import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import linksReducer from './linksReducer';
 
export default combineReducers({
    linksState: linksReducer,
    routing
})