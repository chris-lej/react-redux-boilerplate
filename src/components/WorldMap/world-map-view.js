import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

export const WorldMapView = (props) => (
      <div>
        <LeafletMap
          center={[props.centerLat, props.centerLong]}
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
          {props.businesses.map((business) => (
            <Marker position={[business.coordinates.latitude, business.coordinates.longitude]} key={business.id}>
              <Popup id={`popup-${business.id}`}>
                {business.name}
              </Popup>
            </Marker>
          ))}
        </LeafletMap>
      </div>
    );

export default WorldMapView;
