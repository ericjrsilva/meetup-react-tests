import axios from 'axios';

export const getProdutos = () => dispatch => {

    axios({
        method: 'GET',
        url: ''
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