import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
// TODO: put in.env file
mapboxgl.accessToken =
  'pk.eyJ1IjoibmllbHM3ODkiLCJhIjoiY2txanRlMHd3MDJpZDJ2cG1kNzY2dHNqaCJ9.LQ9eDZh0I7ZNntJrAR52tg'

const Map = () => {
  const mapContainer = useRef(null)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [-119.99959421984575, 38.619551620333496],
      zoom: 14,
    })
    map.on('load', () => {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      })
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })

      // add a sky layer that will show when the map is highly pitched
      map.addLayer({
        id: 'sky',
        type: 'sky',
        paint: {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15,
        },
      })
    })
  }, [])

  // useEffect(() => {
  //   if (map.current) return
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [lng, lat],
  //     zoom: zoom,
  //   })
  // })

  // useEffect(() => {
  //   if (!map.current) return
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4))
  //     setLat(map.current.getCenter().lat.toFixed(4))
  //     setZoom(map.current.getZoom().toFixed(2))
  //   })
  // })

  return <div ref={mapContainer} id="map" className="map-container" />
}

export default Map
