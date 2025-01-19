import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ lat, lng }) => {
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const defaultLat = 18.5204; // Pune latitude
  const defaultLng = 73.8567; // Pune longitude

  const isValidLatLng = (value) => typeof value === "number" && !isNaN(value);
  const validLat = isValidLatLng(lat) ? lat : defaultLat;
  const validLng = isValidLatLng(lng) ? lng : defaultLng;

  const center = { lat: validLat, lng: validLng };

  const onLoad = (map) => {

    if (window.google && window.google.maps) {
      
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAwv3Ku2iRF8WrmCCuCC1HSF4pUobBnycw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
      >
        
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
