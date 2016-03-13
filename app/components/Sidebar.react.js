import React from 'react'
import Post from './Post.react'
import Header from './Header.react'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
              <Header />
              {this.props.posts.items.map((post) => {
                return <Post data={post}/>
              })}
			      </div>
        )
    }
}
