import React, { Component } from 'react'
import moment from 'moment'
import { defer, delay } from 'lodash'
import superagent from 'superagent'
import styles from './style.css'

class If extends Component {
    render() {
        return this.props.test ? this.props.children : null
    }
}

export default class CreatePost extends Component {

    state = {
        posting: false,
        posted: false
    };

    handleSubmit = () => {
        const title = this.refs.title.value.trim() || ''
        const username = this.refs.username.value.trim() || 'Anonymoose'
        const text = this.refs.text.value.trim() || ''
        const emoji = this.refs.emoji.value.trim().length > 0 ? this.refs.emoji.value.trim() : '😄'

        if (title.length === 0) return window.alert('You must set a title!')

        const post = {
            title,
            username,
            text,
            emoji,
            time: moment().unix()
        }

        this.setState({
            posting: true
        })

        defer(() => this.refs.modal.center())

        superagent
            .post('http://api.vicboard.com/threads')
            .send(post)
            .end((err, res) => {
                console.log(err, res)
                this.setState({
                    posting: false,
                    posted: true
                })
                defer(() => this.props.close())
            })


    };

    render() {
        return (
            <paper-dialog ref="modal" opened={this.props.open} with-backdrop  entry-animation="scale-up-animation" modal={true} exit-animation="fade-out-animation">
            
            <If test={!this.state.posting && !this.props.posted}>
              <div>
              <h2 className={styles.title}>New Post</h2>
              <paper-input ref="title" focused label="Title" />
              <paper-input ref="username" label="Username" />
              <paper-input ref="emoji" readonly max={1} label="Emoji!">
                <emoji-selector suffix/>
              </paper-input>
              <paper-input ref="text" label="Post Body" />
              <google-map className={styles.map} latitude="48.460984" longitude="-123.309966"/>

              <paper-button onClick={this.handleSubmit} className={styles.submit}>Submit</paper-button>
              <paper-button onClick={this.props.close} className={styles.create}>Close</paper-button>
              </div>
            </If>
            <If test={this.props.posted}>
              <h2 className={styles.title}>Posted successfully!</h2>
            </If>
          </paper-dialog>
        )
    }
}
