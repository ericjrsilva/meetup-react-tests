import { combineReducers } from 'redux'

const initialState = {
    produtos: []
};

export default combineReducers({
    produtos: function(state = initialState, action) {
        switch(action.type) {
            case 'GET_PRODUTOS':
                return {
                    ...state,
                    produtos: action.payload
                };
            default:
                return state
        }
    }
})