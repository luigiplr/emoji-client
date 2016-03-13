import React, { Component } from 'react'
import styles from './style.css'

export default class Map extends Component {
    render() {
        return (
            <div className={styles.map}>
              <google-map latitude="48.460984" zoom="10" longitude="-123.309966">
              {
                this.props.posts.map(({_source}, key) => {
                  const post = _source
                  if(post.cords && post.cords[0] && post.cords[1])
                    return <google-map-marker key={key} ref={post.id} title={post.title} latitude={post.cords[0]} longitude={post.cords[1]} draggable="true" icon={`https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/${post.emoji_string}.png`}/>
                  else
                    return null
                })
              }

              </google-map>

            </div>
        )
    }
}
