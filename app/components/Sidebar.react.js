import React from 'react'
import Post from './Post.react'
import Form from './Form.react'
import Header from './Header.react'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
              <Header />
              {this.props.posts.items.map((post) => {
                return <Post title={post._source.title} name={post._source.username} text={post._source.text} emoji={post._source.emoji} comments={post._source.comments}/>
              })}
              <Form formType={"post"}/>
			      </div>
        )
    }
}
