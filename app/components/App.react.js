import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar.react'
import Map from './Map.react'
import Compose from './Compose.react'

class App extends React.Component {

    state = {

    };


    render() {
      const compose = (this.props.posts.composingPost) ? <Compose /> : null;
        return (
          <div className="app">
            <Sidebar posts={this.props.posts} />
            {compose}
            <Map />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  const { posts } = state;

  return {
    posts
  }
}

export default connect(mapStateToProps)(App);
