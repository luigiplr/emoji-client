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
                return <Post {...post._source}/>
              })}
              <Form formType={"post"}/>
			      </div>
        )
    }
}
