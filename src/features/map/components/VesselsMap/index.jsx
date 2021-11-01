import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '../VesselsMap/index.css'
import myImage from'./vessel.svg'
import {addMakers} from '../../../../utils/util'


mapboxgl.accessToken = 'pk.eyJ1IjoiZmFiaW9yZWlzdGkiLCJhIjoiY2tlbDFiYWZ2MDhodzJwbnVyOWl2Y3B5ZiJ9.hKG9xzctVNMEAYRLmS1hwA';

const VesselsMap = props =>{
    
    const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);
  const [updatedList, setUpdatedList] = useState({})
  
 
  // Initialize map when component mounts

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    //Fullscreen
    map.addControl(new mapboxgl.FullscreenControl());

    //Add makers
    addMakers(updatedList, map, myImage)

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='sidebarStyle'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
}

export default VesselsMap;