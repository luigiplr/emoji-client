import React, { Component } from 'react'
import styles from './style.css'

export default class CreatePost extends Component {

    state = {};

    render() {
        return (
            <paper-dialog with-backdrop entry-animation="scale-up-animation" modal="true" exit-animation="fade-out-animation">
              <h2>Header</h2>
              <div>Dialog body</div>
            </paper-dialog>
        )
    }
}
