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
                    defaultZoom={3}
                    defaultCenter={{lat: -25.363882, lng: 131.044922}}>
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
