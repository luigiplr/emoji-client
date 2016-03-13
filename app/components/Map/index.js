import React, { Component } from 'react'
import styles from './style.css'

export default class Map extends Component {

    state = {

    };

    render() {
        return (
            <div className={styles.map}>
              <google-map fit-to-markers zoom="11" latitude="48.454723" longitude="-123.355508">
                <google-map-marker latitude="48.454723" longitude="-123.355508"></google-map-marker>
              </google-map>
            </div>
        )
    }
}
