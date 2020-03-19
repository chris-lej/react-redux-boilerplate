import React from 'react'
import {
  connect
} from "react-redux";
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import Selectors from '../../selectors'

export const mapStateToProps = (state) => ({
  centerLat: Selectors.apiRequestLocationLat(state),
  centerLong: Selectors.apiRequestLocationLong(state),
  businesses: Selectors.apiDataTree(state)
})

class Map extends React.Component {
  render() {
    return (
      <div>
        <LeafletMap
          center={[this.props.centerLat, this.props.centerLong]}
          zoom={11}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {this.props.businesses.map((business) => (
            <Marker position={[business.coordinates.latitude, business.coordinates.longitude]} key={business.id}>
              <Popup id={`popup-${business.id}`}>
                {business.name}
              </Popup>
            </Marker>
          ))}
        </LeafletMap>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Map)
