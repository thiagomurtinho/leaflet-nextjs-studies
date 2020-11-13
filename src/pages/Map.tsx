import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MapComponent() {
  return (
    <MapContainer zoom={15} center={[-22.77707343, -43.35917561]}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default MapComponent;
