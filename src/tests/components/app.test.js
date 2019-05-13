import React from 'react'
import { App } from '../../components/app'
import { shallow, mount } from 'enzyme'

const setUpShallow = (props={}) => {
    return shallow(<App {...props} />)
}

const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`)
}

describe('App shallow', () => {
    let wrapper
    let props

    let funcSubmit = jest.fn()
    let funcShowModal = jest.fn()
    let funcExcluir = jest.fn()

    beforeEach(() => {
        props = {
            produtos: [],
            isShowModalCadastro: false,
            produto: null,
            index: null,
            getProdutos: funcSubmit,
            showModalCadastro: funcShowModal,
            excluir: funcExcluir
        }

        wrapper = setUpShallow(props)
    })

    it('should render', () => {
        expect(wrapper).toBeDefined()
    })

    it('should submit', () => {
        var form = findByTestAttr(wrapper, 'form')
        form.simulate('submit')
        expect(funcSubmit).toBeCalled()
    })

    it('should show consult result', () => {
        wrapper.setProps({produtos: [{produto: 'prod 1', quantidade: 1, preco: 1}, {produto: 'prod 2', quantidade: 2, preco: 2}]})
        var linhas = findByTestAttr(wrapper, 'linha_tabela')
        expect(linhas.length).toEqual(2)
        expect(linhas.first().find('td').first().contains('prod 1')).toBe(true)
        expect(linhas.at(1).find('td').first().contains('prod 2')).toBe(true)
    })
})

const setUpMount = (props={}) => {
    return mount(<App {...props} />)
}

describe('App mount', () => {
    let wrapper
    let props

    let funcSubmit = jest.fn()
    let funcShowModal = jest.fn()
    let funcExcluir = jest.fn()

    beforeEach(() => {
        props = {
            produtos: [],
            isShowModalCadastro: false,
            produto: null,
            index: null,
            getProdutos: funcSubmit,
            showModalCadastro: funcShowModal,
            excluir: funcExcluir
        }

        wrapper = setUpMount(props)
    })

    describe('Show modal', () => {
        it('should call showModal ao cadastrar', () => {
            var btnNovo = findByTestAttr(wrapper, 'botao_novo')
            btnNovo.first().simulate('click')
            expect(funcShowModal).toBeCalled()
        })

        it('should call showModal ao editar', () => {
            wrapper.setProps({produtos: [{produto: 'teste', quantidade: 1, preco: 1}]})
            var btnEditar = findByTestAttr(wrapper, 'botao_editar')
            btnEditar.first().simulate('click')
            expect(funcShowModal).toBeCalled()
        })
    })

    it('should call excluir ao deletar', () => {
        wrapper.setProps({produtos: [{produto: 'teste', quantidade: 1, preco: 1}]})
        var btnEditar = findByTestAttr(wrapper, 'botao_excluir')
        btnEditar.first().simulate('click')
        expect(funcExcluir).toBeCalled()
    })
})