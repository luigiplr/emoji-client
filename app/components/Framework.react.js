import React from 'react'
import _ from 'lodash'
import { Provider } from 'react-redux';
import configureStore from  '../store/configureStore'

const store = configureStore();

class If extends React.Component {
    render() {
        return this.props.test ? this.props.children : null
    }
}

export default class Framework extends React.Component {

    state = {

    };


    render() {
        return (
            <Provider store={store}>
              <div>
                <h1>App</h1>
              </div>
            </Provider>

        )
    }
}
