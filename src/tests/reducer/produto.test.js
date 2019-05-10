import produtoReducer from '../../redux/reducers/produtoReducer';
import {produto, produtosMock} from '../__mocks__/produto'

const initialState = {
    produtos: [],
    isShowModalCadastro: false,
    produto: {},
    index: null
};

describe('should test ProdutoReducer', ()=>{

    it('should handle GET_PRODUTOS',()=>{
        const mock = produto
        const action = {type: 'GET_PRODUTOS', payload:mock}
        const expectedState = {...initialState, produtos: mock}
        expect(produtoReducer(initialState, action)).toEqual(expectedState)
    })

    // it('should handle HIDE_MODAL_CADASTRO', ()=>{
    //     const returnReducer = {
    //         ...initialState,
    //         isShowModalCadastro: false,
    //         produto: {}
    //     }
    //     const action = {type: 'HIDE_MODAL_CADASTRO'}
    //     const expectedState = {...initialState, ...returnReducer }
    //     expect(produtoReducer(initialState, action)).toEqual(expectedState)
        
    // })

    // it('should handle EXCLUIR',()=>{
    //     const mock = produto
    //     const stateToReceive = {...initialState, produtos: produtosMock.concat(mock)}

    //     const payload = mock
    //     const action = {type: 'EXCLUIR', payload}
    //     const expectedState = {...initialState, produtos: produtosMock}

    //     expect(produtoReducer(stateToReceive, action)).toEqual(expectedState)
    // })

    // it('should handle SHOW_MODAL_CADASTRO | new product', () => {
    //     const expectedState = {
    //         ...initialState,
    //         isShowModalCadastro: true,
    //         produto: null,
    //         index: null
    //     } 
    //     const action = {type: 'SHOW_MODAL_CADASTRO', payload:{produto:null,index:null}}
    //     expect(produtoReducer(initialState, action)).toEqual(expectedState)
    // })

    // it('should handle SHOW_MODAL_CADASTRO | edit product', () => {
    //     const mock = produto
    //     const expectedState = {
    //         ...initialState,
    //         isShowModalCadastro: true,
    //         produto:mock,
    //         index: 1
    //     } 
    //     const action = {type: 'SHOW_MODAL_CADASTRO', payload:{produto:mock, index: 1}}
    //     expect(produtoReducer(initialState, action)).toEqual(expectedState)
    // })

    // it('should handle SAVE and create new product', ()=>{
    //     const stateToReceive = {...initialState, produtos:produtosMock}
    //     const mock = produto

    //     const expectedState = {
    //         produtos: produtosMock.concat(mock),
    //         isShowModalCadastro: false,
    //         produto: {},
    //         index: null
    //     }
    //     const action = {type: 'SAVE', payload:{produto:{values:mock}, index: null}}
    //     expect(produtoReducer(stateToReceive, action)).toEqual(expectedState)
    // })

    // it('should handle SAVE and edit product', ()=>{
    //     const stateToReceive = {...initialState, produtos:produtosMock}
    //     const mock = produto

    //     const expectedState = {
    //         produtos: [mock,produtosMock[1]],
    //         isShowModalCadastro: false,
    //         produto: {},
    //         index: null
    //     }
    //     const action = {type: 'SAVE', payload:{produto:{values:mock}, index: 0}}
    //     expect(produtoReducer(stateToReceive, action)).toEqual(expectedState)
    // })
})