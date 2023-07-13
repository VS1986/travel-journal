const React = require('react');
const { useMemo } = require('react');
const { GoogleMap, useLoadScript, Marker } = require('@react-google-maps/api');

module.exports = function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
};
