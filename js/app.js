$(document).ready(function() {
  // typed js
  var typed = new Typed(".myName", {
    // Waits 1000ms after typing "First"
    strings: [
      "My Name Adam",
      "I'm Web Developer",
      "Focus On Back-End",
      "Let's See My <i class='fa fa-heart' style='color:red'></i> Portfolio"],
    showCursor: true,
    typeSpeed: 120,
    backSpeed: 100,
    showCursor: true,
    // loop: true,
    smartBackspace: true // Default value
  });

  // particle js
  particlesJS.load('particle-js', 'js/particle.json', function() {
    console.log('particle is loaded');
  });

// circle js
  Circles.create({
  id:           'laravel',
  radius:       60,
  value:        80,
  maxValue:     100,
  width:        13,
  text:         function(value){return value;},
  colors:       ['#e57373', '#e53935'],
  duration:     400,
  wrpClass:     'circles-wrp',
  textClass:    'circles-text',
  styleWrapper: true,
  styleText:    true
});

Circles.create({
id:           'html-css',
radius:       60,
value:        90,
maxValue:     100,
width:        13,
text:         function(value){return value;},
colors:       ['#fb8c00', '#e65100'],
duration:     400,
wrpClass:     'circles-wrp',
textClass:    'circles-text',
styleWrapper: true,
styleText:    true
});

Circles.create({
id:           'jquery',
radius:       60,
value:        60,
maxValue:     100,
width:        13,
text:         function(value){return value;},
colors:       ['#9aa6f1', '#173bd5'],
duration:     400,
wrpClass:     'circles-wrp',
textClass:    'circles-text',
styleWrapper: true,
styleText:    true
});

Circles.create({
id:           'sql',
radius:       60,
value:        70,
maxValue:     100,
width:        13,
text:         function(value){return value;},
colors:       ['#b388ff', '#311b92'],
duration:     400,
wrpClass:     'circles-wrp',
textClass:    'circles-text',
styleWrapper: true,
styleText:    true
});

Circles.create({
id:           'nodejs',
radius:       60,
value:        30,
maxValue:     100,
width:        13,
text:         function(value){return value;},
colors:       ['#b2ff59', '#64dd17'],
duration:     400,
wrpClass:     'circles-wrp',
textClass:    'circles-text',
styleWrapper: true,
styleText:    true
});

Circles.create({
id:           'sleep',
radius:       60,
value:        100,
maxValue:     100,
width:        13,
text:         function(value){return value;},
colors:       ['#bdbdbd', '#212121'],
duration:     400,
wrpClass:     'circles-wrp',
textClass:    'circles-text',
styleWrapper: true,
styleText:    true
});

// Map
url = GMaps.staticMapURL({
  size: [610, 300],
  lat: -7.565755,
  lng: 112.499565,
  markers: [
    {lat: -7.565755, lng: 112.499565}
  ]
});

$('<img/>').attr('src', url)
  .appendTo('#map');

});
