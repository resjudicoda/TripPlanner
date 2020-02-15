const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    const newLocation = document.createElement("div");
    newLocation.style.width = "32px";
    newLocation.style.height = "39px";
    newLocation.style.backgroundImage = `url(${iconURLs[type].replace('"', '')})`;
    //newLocation.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

    const newMarker =  new mapboxgl.Marker(newLocation)
    newMarker.setLngLat(coords);
    return newMarker;
    // newLocationMarker.setLngLat(coords).addTo(map);
};

module.exports = buildMarker;