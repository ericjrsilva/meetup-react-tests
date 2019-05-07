import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import form from '../form'
import { getProdutos } from '../../redux/actions'
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';

class App extends Component {
  render() {
    return(
      <>
        <Formik
          onSubmit={this.consultarAtividadesDocentes}
          initialValues={{
            preco: '',
            quantidade: '',
            produto: ''
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  name="preco"
                  type="input"
                  onChange={handleChange}
                  value={values.preco} />
                <Button type='submit'>CONSULTAR</Button>
              </Form>
          )}
      </Formik>
        {/* LISTAGEM */}
      </>
    )
  }
};

App.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps,{getProdutos})(App);
