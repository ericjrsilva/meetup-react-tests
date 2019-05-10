import * as action from '../../redux/actions/index'
import axios from 'axios'
import { produto, index } from '../__mocks__/produto'

jest.mock('axios')

describe('actions -> getProdutos', () => {
    it('should dispatch GET_PRODUTOS', async () => {
        const dispatch = jest.fn()
        axios.mockImplementation(() => Promise.resolve({}))  
        await action.getProdutos()(dispatch)
        expect(dispatch).toHaveBeenCalled()
    })

    it('should test erro.response without error.response.data', async () => {
        const dispatch = jest.fn();
        axios.mockImplementation(() => Promise.reject({}))      
        await action.getProdutos()(dispatch)
        expect(dispatch).not.toHaveBeenCalled()  
    })
})

describe('actions -> showModalCadastro', () => {
    it('should dispatch SHOW_MODAL_CADASTRO with parameters', async () => {
        const dispatch = jest.fn()
        const expected = {type: 'SHOW_MODAL_CADASTRO', payload: {produto, index} }

        axios.mockImplementation(() => Promise.resolve({}))
        await action.showModalCadastro(produto, index)(dispatch)
        expect(dispatch).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(expected)
    })

    it('should dispatch SHOW_MODAL_CADASTRO without parameters', async () => {
        const dispatch = jest.fn()
        const expected = {type: 'SHOW_MODAL_CADASTRO', payload: {"produto": null, "index": null}}

        axios.mockImplementation(() => Promise.resolve({}))
        await action.showModalCadastro()(dispatch)
        expect(dispatch).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(expected)
    })
})

describe('actions -> hideModalCadastro', () => {
    it('should dispatch HIDE_MODAL_CADASTRO', async () => {
        const dispatch = jest.fn()
        const expected = {type: 'HIDE_MODAL_CADASTRO'}

        axios.mockImplementation(() => Promise.resolve({}))
        await action.hideModalCadastro()(dispatch)
        expect(dispatch).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(expected)
    })
})

describe('actions -> save', () => {
    it('should dispatch SAVE', async () => {
        const dispatch = jest.fn()
        const expected = {type: 'SAVE', payload: {produto, index}}

        axios.mockImplementation(() => Promise.resolve({}))
        await action.save(produto, index)(dispatch)
        expect(dispatch).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(expected)
    })
})


describe('actions -> excluir', () => {
    it('should dispatch EXCLUIR', async () => {
        const dispatch = jest.fn()
        const expected = {type: 'EXCLUIR', payload: produto}

        axios.mockImplementation(() => Promise.resolve({}))
        await action.excluir(produto)(dispatch)
        expect(dispatch).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(expected)
    })
})