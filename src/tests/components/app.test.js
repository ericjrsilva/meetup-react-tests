import React from 'react'
import ReactDOM from 'react-dom'
import Main from '../../main'
import { App } from '../../components/app'
import { shallow, mount } from 'enzyme'

const setUpShallow = (props={}) => {
    return shallow(<App {...props} />)
}

export const findByTestAttr = (component, attr) => {
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

    it('should consult', async () => {
        var form = findByTestAttr(wrapper, 'form')
        form.simulate('submit')
        expect(funcSubmit).toBeCalled()
    })

    it('should show consult result', async () => {
        wrapper.setProps({produtos: [{produto: 'prod 1', quantidade: 1, preco: 1}, {produto: 'prod 2', quantidade: 2, preco: 2}]})
        var linhas = findByTestAttr(wrapper, 'linha_tabela')
        expect(linhas.length).toEqual(2)
        expect(linhas.first().find('td').first().contains('prod 1')).toBeTruly
        expect(linhas.at(2).find('td').first().contains('prod 2')).toBeTruly
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
        it('should call showModal ao cadastrar', async () => {
            var btnNovo = findByTestAttr(wrapper, 'botao_novo')
            btnNovo.first().simulate('click')
            expect(funcShowModal).toBeCalled()
        })

        it('should call showModal ao editar', async () => {
            wrapper.setProps({produtos: [{produto: 'teste', quantidade: 1, preco: 1}]})
            var btnEditar = findByTestAttr(wrapper, 'botao_editar')
            btnEditar.first().simulate('click')
            expect(funcShowModal).toBeCalled()
        })
    })

    it('should call excluir ao deletar', async () => {
        wrapper.setProps({produtos: [{produto: 'teste', quantidade: 1, preco: 1}]})
        var btnEditar = findByTestAttr(wrapper, 'botao_excluir')
        btnEditar.first().simulate('click')
        expect(funcExcluir).toBeCalled()
    })
})