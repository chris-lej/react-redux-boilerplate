import React from 'react'
import {
  connect
} from "react-redux";
import Selectors from '../../selectors';
import WorldMapView from './world-map-view';

export const mapStateToProps = (state) => ({
  centerLat: Selectors.apiRequestLocationLat(state),
  centerLong: Selectors.apiRequestLocationLong(state),
  businesses: Selectors.apiDataTree(state)
})

class WorldMapContainer extends React.Component {
  render() {
    return (
        <WorldMapView
          centerLat={this.props.centerLat}
          centerLong={this.props.centerLong}
          businesses={this.props.businesses}
        />
    );
  }
}

export default connect(mapStateToProps)(WorldMapContainer)
