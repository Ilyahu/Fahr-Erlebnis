import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class LeafletMap extends React.Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string
  }

  static defaultProps = {
    position: [47.4087048,8.4393097],
    zoom: 12,
    markerText: ""
  }

  render() {
      return (
      
        <Map center={this.props.position} zoom={this.props.zoom} zoomControl={true} scrollWheelZoom={false}>
          <TileLayer
            url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=8808ed477142485fa516f23aa6627679"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
            
          />
          {this.props.markerText !== "" &&
          <Marker position={this.props.position}>
            <Popup>{this.props.markerText}</Popup>
          </Marker>
          }
        </Map>
      );
  }
}

export default LeafletMap