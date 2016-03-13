import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar.react'
import Map from './Map.react'

class App extends React.Component {

    state = {

    };


    render() {
        return (
          <div className="app">
            <Sidebar posts={this.props.posts} />
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
