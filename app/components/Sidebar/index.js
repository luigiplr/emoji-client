import React, { Component } from 'react'
import Search from './Search.react'
import Post from './Post.react'
import styles from './style.css'

export default class Sidebar extends Component {

    render() {
        return (
            <paper-scroll-header-panel className={styles.sidebar}>
    			    <paper-toolbar entry-animation="scale-up-animation">
      				  <div className={styles.title}>Recent Posts</div>
      				  <paper-button onClick={this.props.createPost} className={styles.new}>New</paper-button>
      				  <Search />
    			     </paper-toolbar>
    			    <div>
                {
                  this.props.posts.map(({_source}, key) => <Post key={key} {..._source}/>)
    				    }
    			   </div>
  			     </paper-scroll-header-panel>
                
        )
    }
}
