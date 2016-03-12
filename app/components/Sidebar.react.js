import React from 'react'
import Post from './Post.react'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
              {this.props.posts.items.map((post) => {
                return <Post data={post}/>
              })}
			      </div>
        )
    }
}
