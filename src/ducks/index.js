import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import basket from './basket';
import goods from './goods';

const reducer = history =>{
    return combineReducers({
        router: connectRouter(history),
        goods,
        basket
    });
};

export default reducer;