import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'
import Marker from './marker';

class Map extends Component {
  // static defaultProps = { // static props
  //   center: {
  //     lat: 48.8566,
  //     lng: 2.3522
  //   },
  //   zoom: 12
  // };

  render() {
    // const center = { // not using static props
    //     lat: 48.8566,
    //     lng: 2.3522
    // };
    // const zoom = 12;

    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAX8D8OJAYO3vl4YfjrTqLRSfyhwcMQ0l0" }}
        center={this.props.center}
        zoom={this.props.zoom}
        // defaultCenter={center}
        // defaultZoom={zoom}
      >
        {this.props.flats.map((flat) => {
            // console.log(this);
            // console.log(this.props.selected);
            return <Marker
              key={flat.name}
              lat={flat.lat}
              lng={flat.lng}
              text={flat.price}
              // selected={true} />
              selected={flat === this.props.selected} /> // just changing the state and the render method is called directly by React
          })
        }
      </GoogleMapReact>
    );
  }
}

export default Map;
