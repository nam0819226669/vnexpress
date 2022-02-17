import {combineReducers} from 'redux';
import getblog from './getblog'
import parent from './getparent'

export default  combineReducers({
    getblog,
    parent //getblog: getblog

});
