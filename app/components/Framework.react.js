import React from 'react'
import _ from 'lodash'

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
            <div>
                
            </div>
        )
    }
}
