import React from 'react'
import mapboxgl from 'mapbox-gl'
import csv2geojson from 'csv2geojson'

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zoom: 1.5,
      lat: 40,
      lng: 8
    }
  }
  componentDidMount() {
    mapboxgl.accessToken = 'yourtoken'
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })
    var csvFile = '../assets/right-wing-attacks.csv'
    var geoJson = csv2geojson.csv2geojson(csvFile, function(err, data) {})

    this.map.on('load', () => {
      this.map.addLayer({
        'id': 'attacks',
        'type': 'circle',
        'source': {
          'type': 'geojson',
          'data': geoJson
        }
      })
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
