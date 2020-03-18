import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import classes from './Map.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiY2xlamV1bmVtZWlzdGVyIiwiYSI6ImNrN3hpaHExdDAwNjMzZnFxZWt2czNveGgifQ.1j3kadYAFg5UCsTkcvO1_Q';

class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className={classes.mapContainer}/>
      </div>
    )
  }

}

export default MapBox;
