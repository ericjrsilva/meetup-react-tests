import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { getProdutos, showModalCadastro } from '../../redux/actions'
import { connect } from 'react-redux'
import { Button, Form, Table } from 'react-bootstrap';
import { Formik } from 'formik';

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
            </tr>
          </thead>
          <tbody>
            {this.props.produtos.map((prod, i) =>
              <tr key={i}>
                <td>{prod.produto}</td>
                <td>{prod.quantidade}</td>
                <td>{prod.preco}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </>
    )
  }
};

App.propTypes = {
  
};

const mapStateToProps = state => ({
  produtos: state.produtos.produtos
});

export default connect(mapStateToProps,{getProdutos, showModalCadastro})(App);
