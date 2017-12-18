'use strict';

function initMap() {
  var uluru = {lat: 34.869497, lng: -111.760186};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    scrollwheel: false,
    center: uluru,
    gestureHandling: 'cooperative'
  });

  var image = 'img/icon-map-marker.svg';
  var castomMarker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });

}
