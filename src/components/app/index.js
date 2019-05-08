import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { getProdutos, showModalCadastro, hideModalCadastro, save } from '../../redux/actions'
import { connect } from 'react-redux'
import { Button, Form, Table } from 'react-bootstrap';
import { Formik } from 'formik';
import ModalForm from '../form'

class App extends Component {
  render() {
    return(
      <>
        <Formik onSubmit={this.props.getProdutos} >
          {({
            handleSubmit,
            handleChange
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  name="produto"
                  type="input"
                  onChange={handleChange} />
                <Button type='submit'>CONSULTAR</Button>
                <Button onClick={() => this.props.showModalCadastro()}>NOVO</Button>
              </Form>
          )}
        </Formik>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {this.props.produtos.map((prod, i) =>
              <tr key={i}>
                <td>{prod.produto}</td>
                <td>{prod.quantidade}</td>
                <td>{prod.preco}</td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </Table>
        <ModalForm
          isShow={this.props.isShowModalCadastro}
          onHide={this.props.hideModalCadastro}
          save={this.props.save}
        />
      </>
    )
  }
};

App.propTypes = {
  
};

const mapStateToProps = state => ({
  produtos: state.produtos.produtos,
  isShowModalCadastro: state.produtos.isShowModalCadastro
});

export default connect(mapStateToProps,{getProdutos, showModalCadastro, hideModalCadastro, save})(App);
