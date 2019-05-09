import produtoReducer from '../../redux/reducers/produtoReducer';

const initialState = {
    produtos: [],
    isShowModalCadastro: false,
    produto: {},
    index: null
};

describe('testando reducer', ()=>{

    it('testando o GET_PRODUTOS',()=>{
        const payload = [{"preco":4.0,"quantidade":1.0,"produto":"coca-cola"}]
        const action = {type: 'GET_PRODUTOS', payload}
        const expectedState = {...initialState, produtos: payload}
        expect(produtoReducer(undefined, action)).toEqual(expectedState)
    })

    it('teste o HIDE_MODAL_CADASTRO', ()=>{
        const returnReducer = {
            ...initialState,
            isShowModalCadastro: false,
            produto: {}
        }
        const action = {type: 'HIDE_MODAL_CADASTRO'}
        const expectedState = {...initialState, ...returnReducer }
        expect(produtoReducer(undefined, action)).toEqual(expectedState)
        
    })

    it('teste o EXCLUIR',()=>{
        const produtoParaDeletar = {"preco":10.0,"quantidade":1.0,"produto":"produto 1"}
        const stateToReceive = {...initialState, produtos:[produtoParaDeletar,{"preco":20.0,"quantidade":2.0,"produto":"produto 2"}]}

        const payload = produtoParaDeletar
        const action = {type: 'EXCLUIR', payload}
        const expectedState = {...initialState, produtos: [{"preco":20.0,"quantidade":2.0,"produto":"produto 2"}]}

        expect(produtoReducer(stateToReceive, action)).toEqual(expectedState)
    })

    it('testar o SHOW_MODAL_CADASTRO para cadastrar', () => {
        const expectedState = {
            ...initialState,
            isShowModalCadastro: true,
            produto: null,
            index: null
        } 
        const action = {type: 'SHOW_MODAL_CADASTRO', payload:{produto:null,index:null}}
        expect(produtoReducer(undefined, action)).toEqual(expectedState)
    })

    it('testar o SHOW_MODAL_CADASTRO para editar', () => {
        const produto = {"preco":20.0,"quantidade":2.0,"produto":"produto 2"}
        const expectedState = {
            ...initialState,
            isShowModalCadastro: true,
            produto,
            index: 1
        } 
        const action = {type: 'SHOW_MODAL_CADASTRO', payload:{produto, index: 1}}
        expect(produtoReducer(undefined, action)).toEqual(expectedState)
    })

    it('testar o SAVE de um novo produto', ()=>{
        const stateToReceive = {...initialState, produtos:[{"preco":10.0,"quantidade":1.0,"produto":"produto 1"},{"preco":20.0,"quantidade":2.0,"produto":"produto 2"}]}
        const produto = {"preco":5.0,"quantidade":4.0,"produto":"produto novo"}

        const expectedState = {
            produtos: [{"preco":10.0,"quantidade":1.0,"produto":"produto 1"},{"preco":20.0,"quantidade":2.0,"produto":"produto 2"},{"preco":5.0,"quantidade":4.0,"produto":"produto novo"}],
            isShowModalCadastro: false,
            produto: {},
            index: null
        }
        const action = {type: 'SAVE', payload:{produto:{values:produto}, index: null}}
        expect(produtoReducer(stateToReceive, action)).toEqual(expectedState)
    })

    it('testar o SAVE para edição de um produto', ()=>{
        const produtos = [{"preco":10.0,"quantidade":1.0,"produto":"produto 1"},{"preco":20.0,"quantidade":2.0,"produto":"produto 2"}]
        const stateToReceive = {...initialState, produtos}
        const produto = {"preco":5.0,"quantidade":4.0,"produto":"produto novo"}

        const expectedState = {
            produtos: [produto,{"preco":20.0,"quantidade":2.0,"produto":"produto 2"}],
            isShowModalCadastro: false,
            produto: {},
            index: null
        }
        const action = {type: 'SAVE', payload:{produto:{values:produto}, index: 0}}
        expect(produtoReducer(stateToReceive, action)).toEqual(expectedState)
    })
})