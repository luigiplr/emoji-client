import React from 'react'
import { GoogleMap, GoogleMapLoader, Marker } from "react-google-maps"
import { connect } from 'react-redux'

class Map extends React.Component {

    state = {

    };

    handleMapClick(e) {
      console.log('latitude: '+e.latLng.lat());
      console.log('long: '+e.latLng.lng());
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
                    ref={(map) => console.log(map)}
                    defaultZoom={13}
                    defaultCenter={{lat: 48.4422, lng: -123.3657}}>
                    {this.props.map.markers.map((marker, index) => {
                      return (
                        <Marker
                          {...marker} />
                      );
                    defaultOptions={{
                      maxZoom: 16,
                      minZoom: 12,
                      styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}],
                      disableDefaultUI: true
                    }}
                    defaultCenter={{lat: 48.4422, lng: -123.3657}}
                    onClick={this.handleMapClick}
                  >
                    {this.props.posts.items.map((post, index) => {
                      if(typeof post.latitude !== 'undefined')
                        return (
                          <Marker
                            position={{ lat: post.latitude, lng: post.longitude }}
                            icon={ {url: 'images/' + post.category + '.png'} }
                            width="10"
                          />
                        );
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

export default connect(mapStateToProps)(Map)
