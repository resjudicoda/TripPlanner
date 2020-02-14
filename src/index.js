console.log('testing');

const mapboxgl = require("mapbox-gl");

//const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 

mapboxgl.accessToken = 'pk.eyJ1IjoicmVzanVkaWNvZGEiLCJhIjoiY2s2bGwydWlvMGdiaDNscHVtbGM2cGp2NiJ9.SlihU79Gq84SrdM9xxYTXA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-74.009, 40.705] for NY
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
