import * as action from '../../redux/actions/index'
import axios from 'axios'
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { produto, index } from '../__mocks__/produto'

jest.mock('axios')
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('actions -> getProdutos', () => {
    it('should dispatch GET_PRODUTOS', async () => {
        const dispatch = jest.fn()
        axios.mockImplementation(() => Promise.resolve({data: 'teste'}))  
        await action.getProdutos()(dispatch)
        expect(dispatch).toHaveBeenCalledTimes(1)
    })

    it('should test erro.response with error.response.data', async () => {
        const response = {data: 'erro'}
        const dispatch = jest.fn();
        axios.mockImplementation(() => Promise.reject({response}))      
        await action.getProdutos()(dispatch)
        expect(dispatch).toHaveBeenCalledTimes(0)
    })

    it('should test erro.response without error.response.data', async () => {
        const dispatch = jest.fn();
        axios.mockImplementation(() => Promise.reject({}))      
        await action.getProdutos()(dispatch)
        expect(dispatch).toHaveBeenCalledTimes(0)  
    })
})

describe('actions -> showModalCadastro', () => {
    it('should dispatch SHOW_MODAL_CADASTRO with parameters', async () => {
        const initialState = {}
        const store = mockStore(initialState)
        store.dispatch(action.showModalCadastro(produto, index))

        const actions = store.getActions()
        const expectedPayload = { type: 'SHOW_MODAL_CADASTRO', payload: {produto, index} }
        expect(actions).toEqual([expectedPayload])
    })

    it('should dispatch SHOW_MODAL_CADASTRO without parameters', async () => {
        const initialState = {}
        const store = mockStore(initialState)
        store.dispatch(action.showModalCadastro())

        const actions = store.getActions()
        const expectedPayload = { type: 'SHOW_MODAL_CADASTRO', payload: {"produto": null, "index": null} }
        expect(actions).toEqual([expectedPayload])
    })
})

describe('actions -> hideModalCadastro', () => {
    it('should dispatch HIDE_MODAL_CADASTRO', async () => {
        const initialState = {}
        const store = mockStore(initialState)
        store.dispatch(action.hideModalCadastro())

        const actions = store.getActions()
        const expectedPayload = { type: 'HIDE_MODAL_CADASTRO' }
        expect(actions).toEqual([expectedPayload])
    })
})

describe('actions -> save', () => {
    it('should dispatch SAVE', async () => {
        const dispatch = jest.fn()
        const response = {data: 'teste'}
        const expected = {type: 'SAVE', payload: {produto, index}}

        axios.mockImplementation(() => Promise.resolve(response))
        await action.save(produto, index)(dispatch)
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledWith(expected)
    })
})


describe('actions -> excluir', () => {
    it('should dispatch EXCLUIR', async () => {
        const dispatch = jest.fn()
        const response = {data: 'teste'}
        const expected = {type: 'EXCLUIR', payload: produto}

        axios.mockImplementation(() => Promise.resolve(response))
        await action.excluir(produto)(dispatch)
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledWith(expected)
    })
})