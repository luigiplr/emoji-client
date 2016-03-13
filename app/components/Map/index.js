import React, { Component } from 'react'
import styles from './style.css'

export default class Map extends Component {

    state = {
        posts: [
            {
              cords: [48.460984, -123.309966],
              imgurl: "http://big.assets.huffingtonpost.com/happy.jpg"
            },
            {
              cords: [48.463000, -123.32],
              imgurl: "http://big.assets.huffingtonpost.com/happy.jpg"
            },
            {
              cords: [48.45, -123.29],
              imgurl: "http://big.assets.huffingtonpost.com/happy.jpg"
            }
          ]
    };

    render() {
        return (
            <div className={styles.map}>
              <google-map latitude="48.460984" longitude="-123.309966">
              {
                this.state.posts.map(post => <google-map-marker latitude={post.cords[0]} longitude={post.cords[1]}
                  draggable="true" clickEvents={true} icon={post.imgurl}/>)
              }

              </google-map>

            </div>
        )
    }
}
