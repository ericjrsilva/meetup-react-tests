import { combineReducers } from 'redux'

const initialState = {
    produtos: [],
    isShowModalCadastro: false
};

export default combineReducers({
    produtos: function (state = initialState, action) {
        switch(action.type) {
            case 'GET_PRODUTOS':
                return {
                    ...state,
                    produtos: action.payload
                };
            case 'SHOW_MODAL_CADASTRO':
                return {
                    ...state,
                    isShowModalCadastro: true
                }
            case 'HIDE_MODAL_CADASTRO':
                return {
                    ...state,
                    isShowModalCadastro: false
                }
            default:
                return state;
        }
    }
})