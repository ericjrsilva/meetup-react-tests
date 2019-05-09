import { combineReducers } from 'redux'
import produtos from './produtoReducer'

export default combineReducers({
    produtos: produtos
})