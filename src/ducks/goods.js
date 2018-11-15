import {createAction, createReducer} from 'redux-act';
import axios from 'axios';
import {API} from '../service';


export const   REDUCER = 'GOODS'
const NS = `${REDUCER}__`;


const initialState ={
    items: [],
    concatisLoading: false,
    error: ''
};

const reducer = createReducer({}, initialState);

const readRequest = createAction(`${NS}READ_REQUEST`);
reducer.on(readRequest, state =>({
   ...state,
   isLoading: true
}));

const readSuccess = createAction(`${NS}READ_SUCCESS`);
reducer.on(readSuccess, (state, items)=>({
    ...state,
    isLoading: false,
    items: [...items]
}));

const readFailure = createAction(`${NS}READ_FAILURE`);
reducer.on(readFailure, (state, error)=>({
    ...state,
    isLoading: false
}));

export const readGoods = () => dispatch =>{
    dispatch(readRequest());
    return axios
    .get(`${API}goods/`)
    .then(response =>{
        dispatch(readSuccess(response.data.goods));
    })
    .catch(error =>{
        dispatch(readFailure());
        return Promise.reject(error);
    });
};

export default reducer;

