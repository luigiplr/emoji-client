import React, { Component } from 'react'
import moment from 'moment'
import { defer, delay } from 'lodash'
import superagent from 'superagent'
import styles from './style.css'
import emojis from '../../utils/emojis'

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
            cords: [this.refs.map.latitude, this.refs.map.longitude],
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
            <paper-dialog autoFitOnAttach={true} ref="modal" className={styles.model} opened={this.props.open} with-backdrop  entry-animation="scale-up-animation" modal={true} exit-animation="fade-out-animation">
            
            <If test={!this.state.posting && !this.props.posted}>
              <div>
              <h2 className={styles.title}>New Post</h2>
              <paper-dialog-scrollable>
              <paper-input ref="title" focused label="Title" />
              <paper-input ref="username" label="Username" />
              <paper-dropdown-menu label="Upwards and to the left!" vertical-align="bottom" horizontal-align="left">
                <paper-listbox class="dropdown-content">
                  {
                    Object.keys(emojis).map((emoji_string) =>{
                       return (<paper-item className={styles.dropdownImage} key={emoji_string}><img src={`https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/${emoji_string}.png`}/></paper-item>)
                    })
                  }

                </paper-listbox>
              </paper-dropdown-menu>
              <paper-input ref="text" label="Post Body" />
              <google-map  className={styles.map} latitude="48.460984" longitude="-123.309966">
                <google-map-marker ref="map" latitude="48.460984" longitude="-123.309966" draggable="true" title="Post Coordinates"/>
              </google-map>
              </paper-dialog-scrollable>
              <paper-button raised onClick={this.handleSubmit} className={styles.submit}>Submit</paper-button>
              <paper-button raised onClick={this.props.close} className={styles.create}>Close</paper-button>
              </div>
            </If>
            <If test={this.props.posted}>
              <h2 className={styles.title}>Posted successfully!</h2>
            </If>
          </paper-dialog>
        )
    }
}
