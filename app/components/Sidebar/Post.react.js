import React, { Component } from 'react'
import styles from './style.css'

export default class Post extends Component {

    render() {
        return (
            <paper-card className={styles.post}>
    					  
    					     <div className={styles.content}>
    						    <div className={styles.postHeader}>{this.props.title}</div>
 							      <div className={styles.postContent}>{this.props.text}</div>
  							     <div className={styles.actions}>
    							     <paper-button raised>Read More</paper-button>
  							     </div>
  						    </div>
  						       <div className={styles.voter}>
    						      <paper-icon-button className={`${styles.button} ${styles.first}`} icon="arrow-drop-up"/>
    						      <paper-icon-button className={styles.button} icon="arrow-drop-down"/>
    					     </div>
			</paper-card>
        )
    }
}
