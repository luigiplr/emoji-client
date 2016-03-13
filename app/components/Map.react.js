import React from 'react'
import { GoogleMap, GoogleMapLoader } from "react-google-maps"
import { connect } from 'react-redux'

class Map extends React.Component {

    state = {

    };


    render() {
        return (
            <div className="map column">
              <GoogleMapLoader
                containerElement={
                  <div
                    {...this.props}
                    style={{
                      height: "100%",
                    }}
                  />
                }
                googleMapElement={
                  <GoogleMap
                    ref={(map) => console.log(map)}
                    defaultZoom={13}
                    defaultOptions={{
                      styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}],
                      disableDefaultUI: true
                    }}
                    defaultCenter={{lat: 48.4422, lng: -123.3657}}>
                    {this.props.map.markers.map((marker, index) => {
                      return (
                        <Marker
                          {...marker} />
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
  const { map } = state;

  return {
    map
  }
};

export default connect(mapStateToProps)(Map)
