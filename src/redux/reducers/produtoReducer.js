const initialState = {
    produtos: [],
    isShowModalCadastro: false,
    produto: {},
    index: null
};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'GET_PRODUTOS':
            return {
                ...state,
                produtos: action.payload
            };
        case 'SHOW_MODAL_CADASTRO':
            return {
                ...state,
                isShowModalCadastro: true,
                produto: action.payload.produto,
                index: action.payload.index
            }
        case 'HIDE_MODAL_CADASTRO':
            return {
                ...state,
                isShowModalCadastro: false,
                produto: {}
            }
        case 'SAVE':
            var listaAtividades = state.produtos

            if (action.payload.index !== null)
                listaAtividades[action.payload.index] = action.payload.produto.values
            else
                listaAtividades = listaAtividades.concat(action.payload.produto.values)
            return {
                ...state,
                produtos: listaAtividades,
                isShowModalCadastro: false,
                produto: {},
                index: null
            }
        case 'EXCLUIR':            
            return {
                ...state,
                produtos: [...state.produtos.filter(prod => prod !== action.payload)]
            }
        default:
            return state;
    }
}