import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ lat, lng }) => {
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const defaultLat = 37.7749; // San Francisco latitude
  const defaultLng = -122.4194; // San Francisco longitude

  const isValidLatLng = (value) => typeof value === "number" && !isNaN(value);
  const validLat = isValidLatLng(lat) ? lat : defaultLat;
  const validLng = isValidLatLng(lng) ? lng : defaultLng;

  const center = { lat: validLat, lng: validLng };

  const onLoad = (map) => {
    // Ensure the google.maps object is available
    if (window.google && window.google.maps) {
      // You can now use google.maps.marker.AdvancedMarkerElement
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
        {/* Use the standard Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
