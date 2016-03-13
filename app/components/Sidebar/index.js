import React, { Component } from 'react'
import styles from './style.css'

export default class Sidebar extends Component {

    state = {};

    render() {
        return (
            <paper-scroll-header-panel className={styles.sidebar}>
    			<paper-toolbar>
      				<div>Recent Posts</div>
    			</paper-toolbar>
    			<div>
    				<paper-card className={styles.post}>
    					<div className={styles.voter}>
    						<paper-icon-button className={`${styles.button} ${styles.first}`} icon="arrow-drop-up"/>
    						<paper-icon-button className={styles.button} icon="arrow-drop-down"/>
    					</div>
    					<div className={styles.content}>
    						<div className={styles.postHeader}>Title here </div>
 							<div className={styles.postContent}>Leprosy remains a public health issue in poorer parts of the world. In 2007 there were approximately 
 							255,000 new cases reported worldwide. Leprosy (or Hansen's disease) is a chronic infectious disease. The skin and peripheral nerves of people with leprosy contain leprosy bacteria. 
 							Leprosy can be cured with a combination of antibiotics. The immune system plays an important role in leprosy and determines if and how the disease will develop.
 							</div>
  							<div className={styles.actions}>
    							<paper-button raised>Read More</paper-button>
  							</div>
  						</div>
					</paper-card>
    			</div>
  			</paper-scroll-header-panel>
        )
    }
}
