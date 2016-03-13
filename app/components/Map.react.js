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
