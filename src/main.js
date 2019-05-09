import React, { Component } from 'react';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store'
import Root from './routes';


class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default Main;