import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPinIcon } from './Icons';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom gold marker icon
const goldIcon = L.divIcon({
  html: `
    <div style="
      background: #C9A96E;
      width: 32px;
      height: 32px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        width: 10px;
        height: 10px;
        background: #1a1a2e;
        border-radius: 50%;
        transform: rotate(45deg);
      "></div>
    </div>
  `,
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// MiaMarina coordinates — Key Biscayne
const position = [25.6915, -80.1600];

export default function MapEmbed() {
  return (
    <div style={{ borderRadius: '16px', overflow: 'hidden', height: '100%', minHeight: '280px' }}>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: '100%', minHeight: '280px', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; Esri'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={position} icon={goldIcon}>
          <Popup>
            <div style={{ textAlign: 'center', padding: '8px 4px', fontFamily: 'system-ui, sans-serif' }}>
              <strong style={{ color: '#1a1a2e', fontSize: '14px' }}>MiaMarina</strong>
              <br />
              <span style={{ color: '#666', fontSize: '12px' }}>Key Biscayne, FL</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
