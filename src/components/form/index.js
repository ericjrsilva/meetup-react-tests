import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import * as Yup from 'yup'
import { Formik, ErrorMessage } from 'formik';
import { Button, Form } from 'react-bootstrap';

const ValidarCadastroProduto = Yup.object().shape({
    produto: Yup.string().trim()
        .max(10, 'O campo deve ter no máximo 10 caracteres')
        .required('Campo obrigatório'),
    quantidade: Yup.string().trim()
        .required('Campo obrigatório'),
    preco: Yup.string().trim()
        .required('Campo obrigatório')
});

const alertForm = (erro) => (
    <div style={{height:'20%'}}>
        <span className="danger" style={{color:'#a94442'}}>
            {erro}
        </span>
    </div>
)

export default class ModalForm extends Component {
    render() {
        const handleSubmit = (values) => {
            this.props.save({values}, this.props.index)
        }

        return (
            <Modal show={this.props.isShow} onHide={() => this.props.onHide()}>
                <Modal.Header closeButton>
                    <p>Cadastro de produto</p>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        onSubmit={handleSubmit}
                        validationSchema={ValidarCadastroProduto}
                        initialValues={{
                            produto: this.props.produto ? this.props.produto.produto : '',
                            quantidade: this.props.produto ? this.props.produto.quantidade : '',
                            preco: this.props.produto ? this.props.produto.preco : ''
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            values,
                            setFieldValue
                            }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Control
                                            type='input'
                                            value={values.produto}
                                            name='produto'
                                            onChange={(event) => setFieldValue('produto', event.target.value)}
                                            placeholder='Produto...'
                                        />
                                        <ErrorMessage component="span" name="produto">{(msg) => alertForm(msg)}</ErrorMessage>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            type='input'
                                            value={values.quantidade}
                                            name='quantidade'
                                            onChange={handleChange}
                                            placeholder='Quantidade...'
                                        />
                                        <ErrorMessage component="span" name="quantidade">{(msg) => alertForm(msg)}</ErrorMessage>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            type='input'
                                            value={values.preco}
                                            name='preco'
                                            onChange={handleChange}
                                            placeholder='Preço...'
                                        />
                                        <ErrorMessage component="span" name="preco">{(msg) => alertForm(msg)}</ErrorMessage>
                                    </Form.Group>
                                    <Form.Group >
                                        <Button type='submit'>Salvar</Button>
                                    </Form.Group>
                                </Form>
                            )
                        }
                    </Formik>
                </Modal.Body>
            </Modal>
        )
    }
}