import GMaps from 'gmaps';

const map = new GMaps({
  el: '#map',
  lat: 48.144558,
  lng: 17.115472,
  scrollwheel: false,
});

map.addMarker({
  lat: 48.144558,
  lng: 17.115472,
  title: 'Nodeschool - Bratislava',
  infoWindow: {
    content: '<p>Nodeschool - Bratislava</p>',
  },
});
