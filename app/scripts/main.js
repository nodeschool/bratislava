/* global GMaps */

const myApp = myApp || {};

const map = new GMaps({
  el: '#map',
  lat: 48.1442774,
  lng: 17.1066003,
  scrollwheel: false,
});

map.addMarker({
  lat: 48.1442774,
  lng: 17.1066003,
  title: 'Nodeschool - Bratislava',
  infoWindow: {
    content: '<p>Nodeschool - Bratislava</p>',
  },
});
