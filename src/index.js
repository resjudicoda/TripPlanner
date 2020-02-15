console.log('testing');

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker")

//const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 

mapboxgl.accessToken = 'pk.eyJ1IjoicmVzanVkaWNvZGEiLCJhIjoiY2s2bGwydWlvMGdiaDNscHVtbGM2cGp2NiJ9.SlihU79Gq84SrdM9xxYTXA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // [-74.009, 40.705] for NY
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const fullStack = document.createElement("div");
fullStack.style.width = "32px";
fullStack.style.height = "39px";
fullStack.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const fullStackMarker = new mapboxgl.Marker(fullStack);
fullStackMarker.setLngLat([-87.641, 41.895]).addTo(map);

console.log('making sure');

const coalFire = buildMarker('restaurant', [-87.659924, 41.891849]);
coalFire.addTo(map);

const robey = buildMarker('hotel', [-87.678161, 41.910853]);
robey.addTo(map);

const tennis = buildMarker('activity', [-87.697569, 41.905986]);
tennis.addTo(map);