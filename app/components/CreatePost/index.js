import React, { Component } from 'react'
import { defer } from 'lodash'
import styles from './style.css'

class If extends Component {
    render() {
        return this.props.test ? this.props.children : null
    }
}

export default class CreatePost extends Component {

    state = {
        validated: false,
        posting: false
    };

    handleSubmit = () => {
        const title = this.refs.title.value.trim() || ''
        const username = this.refs.username.value.trim() || 'Anonymoose'
        const text = this.refs.text.value.trim() || ''
        const emoji = this.refs.emoji.value.trim() || ''

        if (title.length === 0) return window.alert('You must set a title!')

        const post = {
            title,
            username,
            text,
            emoji
        }


        this.setState({
            posting: true
        })

        defer(() => this.refs.modal.center())

    };

    render() {
        return (
            <paper-dialog ref="modal" opened={this.props.open} with-backdrop  entry-animation="scale-up-animation" modal={true} exit-animation="fade-out-animation">
            <h2 className={styles.title}>{(this.state.posting ? 'Posting..' : 'New Post')}</h2>
            <If test={!this.state.posting}>
              <div>
              <paper-input ref="title" focused label="Title" />
              <paper-input ref="username" label="Username" />
              <paper-input ref="emoji" readonly max={1} label="Emoji!">
                <emoji-selector suffix/>
              </paper-input>
              <paper-input ref="text" label="Post Body" />
              <paper-button onClick={this.handleSubmit} className={styles.submit}>Submit</paper-button>
              <paper-button onClick={this.props.close} className={styles.create}>Close</paper-button>
              </div>
            </If>
            <If test={this.state.posting}>
              <paper-spinner className={styles.postingSpinner} alt="Posting" active></paper-spinner>
            </If>
          </paper-dialog>
        )
    }
}
