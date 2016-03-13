import React from 'react'
import { GoogleMap, GoogleMapLoader, Marker } from "react-google-maps"
import emoji from '../utils/emojiUtil'
import { connect, dispatch } from 'react-redux'
import * as PostActions from '../actions';


class Map extends React.Component {

    constructor(props) {
        super(props);
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    handleMapClick(e) {
        this.props.onComposePost(e.latLng.lat(), e.latLng.lng());
        console.log('latitude: ' + e.latLng.lat());
        console.log('long: ' + e.latLng.lng());
    }

    render() {
        return (
            <div className="map column">
              <GoogleMapLoader
                containerElement={
                  <div
                    style={{
                      height: "100%",
                    }}
                  />
                }
                googleMapElement={
                  <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{lat: 48.4422, lng: -123.3657}}
                    defaultOptions={{
                      maxZoom: 16,
                      minZoom: 12,
                      styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}],
                      disableDefaultUI: false
                    }}
                    onClick={this.handleMapClick}
                  >
                    {this.props.posts.items.map((post, index) => {
                      if(typeof post.latitude !== 'undefined') {
                        return (
                          <Marker
                          	key={index}
                          	icon={emoji(post.emoji)}
                            position={{ lat: post.latitude, lng: post.longitude }}
                            width="10"
                          />
                        );
                      }
                    })}
                  </GoogleMap>
                }
              />
            </div>
        )
    }
}

const mapStateToProps = (
    state
) => {
    const { posts } = state;

    return {
        posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onComposePost: (lat, lng) => {
            dispatch(PostActions.composePost(lat, lng))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
