import React, { Component } from 'react'
import styles from './style.css'

export default class Map extends Component {

    state = {

    };

    render() {
        return (
            <div className={styles.map}>
              <google-map latitude="37.77493" longitude="-122.41942">
              </google-map>
            </div>
        )
    }
}
