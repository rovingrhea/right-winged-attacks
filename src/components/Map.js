import React from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = 'yourtoken'
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9'
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    return <div className='map' ref={el => this.mapContainer = el} />;
  }
}

export default Map;
