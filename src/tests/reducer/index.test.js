import produto from '../../redux/reducers/produtoReducer';

const initialState = {
    produtos: [],
    isShowModalCadastro: false,
    produto: {},
    index: null
};

describe('testando reducer', ()=>{

    // it('testando o GET_PRODUTOS',()=>{
    //     const payload = [{"preco":4.0,"quantidade":1.0,"produto":"coca-cola"}]
    //     const action = {type: 'GET_PRODUTOS', payload}
    //     const expectedState = {...initialState, produtos: payload}
    //     expect(produto(undefined, action)).toEqual(expectedState)
    // })

    // it('teste o HIDE_MODAL_CADASTRO', ()=>{
    //     const returnReducer = {
    //         ...initialState,
    //         isShowModalCadastro: false,
    //         produto: {}
    //     }
    //     const action = {type: 'HIDE_MODAL_CADASTRO'}
    //     const expectedState = {...initialState, ...returnReducer }
    //     expect(produto(undefined, action)).toEqual(expectedState)
        
    // })

    it('teste o EXCLUIR',()=>{
        const stateToReceive = {...initialState, produtos:[{"preco":10.0,"quantidade":1.0,"produto":"produto 1"},{"preco":20.0,"quantidade":2.0,"produto":"produto 2"}]}

        const payload = {"preco":20.0,"quantidade":2.0,"produto":"produto 2"}
        const action = {type: 'EXCLUIR', payload}
        const expectedState = {...initialState, produtos: [{"preco":10.0,"quantidade":1.0,"produto":"produto 1"}]}

        expect(produto(stateToReceive, action)).toEqual(expectedState)
    })

    // it('testar o SHOW_MODAL_CADASTRO para cadastrar', () => {
    //     const expectedState = {
    //         ...initialState,
    //         isShowModalCadastro: true,
    //         produto: null,
    //         index: null
    //     } 
    //     const action = {type: 'SHOW_MODAL_CADASTRO'}
    //     expect(produto(undefined, action)).toEqual(expectedState)
    // })

    // it('testar o SHOW_MODAL_CADASTRO para editar', () => {
    //     const produto = {"preco":20.0,"quantidade":2.0,"produto":"produto 2"}
    //     const expectedState = {
    //         ...initialState,
    //         isShowModalCadastro: true,
    //         produto,
    //         index: 1
    //     } 
    //     const action = {type: 'SHOW_MODAL_CADASTRO', payload:{produto, index: 1}}
    //     expect(produto(undefined, action)).toEqual(expectedState)
    // })

    // it('testar o SAVE de um novo produto', ()=>{
    //     const stateToReceive = {...initialState, produtos:[{"preco":10.0,"quantidade":1.0,"produto":"produto 1"},{"preco":20.0,"quantidade":2.0,"produto":"produto 2"}]}
    //     const produto = {"preco":5.0,"quantidade":4.0,"produto":"produto novo"}

    //     const expectedState = {
    //         produto: [{"preco":10.0,"quantidade":1.0,"produto":"produto 1"},{"preco":20.0,"quantidade":2.0,"produto":"produto 2"},{"preco":5.0,"quantidade":4.0,"produto":"produto novo"}],
    //         isShowModalCadastro: false,
    //         produto: {},
    //         index: null
    //     }
    //     const action = {type: 'SAVE', payload:{produto, index: null}}
    //     expect(produto(stateToReceive, action)).toEqual(expectedState)
    // })
})