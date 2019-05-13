import React from 'react'
import { shallow, mount } from 'enzyme'
import ModalForm from '../../components/form'

const setUp = (props={}) => {
  return shallow(<ModalForm {...props} />)
}

export const findByTestAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`)
}

describe('ModalForm', () => {
    let wrapper
    let props

    let funcHide = jest.fn()
    let funcSalvar = jest.fn()

    beforeEach(() => {
        props = {
            isShow: true,
            onHide: funcHide,
            save: funcSalvar,
            produto: null
        }
  
        wrapper = setUp(props)
    })

    it('should render', () => {
        expect(wrapper).toBeDefined()
    })

    it('should hide', () => {
        wrapper.simulate('hide')
        expect(funcHide).toBeCalled()
    })

    it('should show validation', async () => {
        wrapper = mount(<ModalForm {...props} />)
        const form = findByTestAttr(wrapper, 'form')
        form.simulate('submit') 
        await new Promise(resolve => setTimeout(resolve, 0));
        wrapper.update();
        const erros = findByTestAttr(wrapper, 'ErrorMessageProduto')
        expect(erros.at(1).props().formik.errors.produto).toBe('Campo obrigatório');
        expect(erros.at(1).props().formik.errors.quantidade).toBe('Campo obrigatório');
        expect(erros.at(1).props().formik.errors.preco).toBe('Campo obrigatório');
    })

    it('should submit', async () => {
        props = {
            isShow: true,
            onHide: funcHide,
            save: funcSalvar,
            produto: {produto: 'produto1', quantidade: 10, preco: 20}
        }

        wrapper = mount(<ModalForm {...props} />)
        const form = findByTestAttr(wrapper, 'form')
        form.simulate('submit')
        await new Promise(resolve => setTimeout(resolve, 0))
        expect(funcSalvar).toBeCalled()

        // Testando os valores campo a campo
        expect(funcSalvar.mock.calls[0][0].values.produto).toBe('produto1')
        expect(funcSalvar.mock.calls[0][0].values.quantidade).toBe(10)
        expect(funcSalvar.mock.calls[0][0].values.preco).toBe(20)

        // Testando todo o objeto
        expect(funcSalvar.mock.calls[0][0].values).toEqual(props.produto)
    })
})