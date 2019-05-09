import axios from 'axios';

export const getProdutos = () => dispatch => {
    axios({
        method: 'GET',
        url: 'https://api.myjson.com/bins/12hycq'
    })
    .then(response =>
        dispatch({
            type: 'GET_PRODUTOS',
            payload: response.data
        })
    )
    .catch(error => {
        let errorMessage = {};

        if (error.response && error.response.data)
            errorMessage = error.response.data;
        else
            errorMessage = { message: '' };

        console.log(errorMessage.message)
    })
};

export const showModalCadastro = (produto = null, index = null) => dispatch => {
    dispatch({
        type: 'SHOW_MODAL_CADASTRO',
        payload: {produto, index}
    })
}

export const hideModalCadastro = () => dispatch => {
    dispatch({
        type: 'HIDE_MODAL_CADASTRO'
    })
}

export const save = (produto, index) => dispatch => {
    dispatch({
        type: 'SAVE',
        payload: {produto, index}
    })
}

export const excluir = (produto) => dispatch => {
    dispatch({
        type: 'EXCLUIR',
        payload: produto
    })
}