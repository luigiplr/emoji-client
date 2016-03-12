import React from 'react'
import { connect } from 'react-redux'
import AppHeader from './AppHeader.react'
import Sidebar from './Sidebar.react'
import Map from './Map.react'

class App extends React.Component {

    state = {

    };


    render() {
        return (
          <div className="app">
            <AppHeader />
            <div className="content">
              <Sidebar posts={this.props.posts} />
              <Map />
            </div>
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
