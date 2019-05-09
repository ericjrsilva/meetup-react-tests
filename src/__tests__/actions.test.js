
import * as action from '../redux/actions/index'
import axios from 'axios'

jest.mock('axios')

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