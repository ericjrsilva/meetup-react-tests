import React, { Component } from 'react';
import './App.css';
import { getProdutos, showModalCadastro, hideModalCadastro, save, excluir } from '../../redux/actions'
import { connect } from 'react-redux'
import { Button, Form, Table, CardImg } from 'react-bootstrap';
import { Formik } from 'formik';
import ModalForm from '../form';

export class App extends Component {
  render() {
    return(
      <div style={{margin: '20px'}}>
        <Formik onSubmit={this.props.getProdutos} data-test='form'>
          {({
            handleSubmit,
            handleChange
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  name="produto"
                  type="input"
                  onChange={handleChange}
                  style={{width:'500px'}}/>
                <Button type='submit' style={{margin: '10px'}}>CONSULTAR</Button>
                <Button onClick={() => this.props.showModalCadastro()} data-test='botao_novo'>NOVO</Button>
              </Form>
          )}
        </Formik>
        <Table striped bordered hover style={{marginTop: '20px'}}>
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
              <tr key={i} data-test='linha_tabela'>
                <td>{prod.produto}</td>
                <td>{prod.quantidade}</td>
                <td>{prod.preco}</td>
                <td>
                  <CardImg title={'Editar'} src={require('./editar.svg')} style={{margin: "auto", width:'21px', cursor:'pointer'}} onClick={() => this.props.showModalCadastro(prod, i)} data-test='botao_editar'/>
                </td>
                <td>
                  <CardImg title={'Excluir'} src={require('./excluir.svg')} style={{margin: "auto", width:'21px', cursor:'pointer'}} onClick={() => this.props.excluir(prod)} data-test='botao_excluir' />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <ModalForm
          isShow={this.props.isShowModalCadastro}
          onHide={this.props.hideModalCadastro}
          save={this.props.save}
          produto={this.props.produto}
          index={this.props.index}
        />
      </div>
    )
  }
};

App.propTypes = {
  
};

const mapStateToProps = state => ({
  produtos: state.produtos.produtos,
  isShowModalCadastro: state.produtos.isShowModalCadastro,
  produto: state.produtos.produto,
  index: state.produtos.index
});

export default connect(mapStateToProps,{getProdutos, showModalCadastro, hideModalCadastro, save, excluir})(App);
