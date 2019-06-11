/*
  OBJECTS - DOMAIN MODELING

  - Attributes (NOUN)
    i.e.
      Windshield
      Door
      Tires
      Engine Type
      Color

  - Behavior . (VERB)
    - Warm your butt
    - Move
    - Stop

*/

// ARRAY []

// OBJ {}
// Property:Value
//  "Key/Value Pair"
// this = context
// this.hair.color
//  "this object's ... hair.color"
//  "this is my hair.color"

var sky = "blue";

var zach = {
  color: 'pale',
  hair: {
    color: 'brown',
    type: 'curly',
    texture: 'thick',
    length: 'short'
  }
};

var allie = {
  color: 'pale',
  hair: {
    color: 'black',
    type: 'curly',
    texture: 'thick',
    length: 'long'
  },
  run: function() { console.log('Running Fast'); },
  walk: function() { console.log('Zach will be there later...'); }
};

var john = {
  firstName: 'John',
  lastName: 'Cokos',
  height: '5-9',
  weight: '',
  color: 'pale',
  hair: {
    color: 'white',
    type: 'curly',
    texture: 'thick',
    length: 'long'
  },
  children: [zach,allie], // Extensible
  run: function() { console.log(`Running Fast`); },
  walk: function() { console.log( `${sky} "will be" there's later...`); }
}

var lovelace = {
  temp: 72,
  light: 5,
  dim: function(num) {
    this.light = num;
  },
  heat: function(num) {
    this.temp = num;
  }
}

var turing = {
  temp: 68,
  light: 9,
  dim: function(num) {
    this.light = num;
    this.heat(57);
  },
  heat: function(num) {
    this.temp = num;
  }
}

john.walk();
john.run();

console.log(turing);
turing.dim(5);
console.log(turing);

console.log(JSON.stringify(turing));


// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA






'use strict';

var garage = {

  items: ['car', 'bat', 'balls', 'tv'],

  render: function () {

    // Find the ul
    var stuffElement = document.getElementById('stuff');

    for (let i = 0; i < this.items.length; i++) {
      // Add a new element
      var newItem = document.createElement('li');

      // Give that new element text
      newItem.textContent = this.items[i];

      // Add the new element to the ul
      stuffElement.appendChild(newItem);
    }
  }
}


// this.whatever


var house = {

  items: ['dishes', 'couch', 'roomba'],

  render: function () {

    // Find the ul
    var stuffElement = document.getElementById('stuff');
    
    for (let i = 0; i < this.items.length; i++) {
      // Add a new element
      var newItem = document.createElement('li');

      // Give that new element text
      newItem.textContent = this.items[i];

      // Add the new element to the ul
      stuffElement.appendChild(newItem);
    }
  }
}



var pageInitialize = function () {
  house.render();
  garage.render();
}


pageInitialize();



var myNewItem = document.createElement('span');






var SeatacAirport = {
  minCust: 3,
  maxCust: 24,
  avgCookiePer: 1.2,
  name: ('Seatac Airport'),
  totalCookiesSold: [],
  totalCookies: 0,

  generateRandom:function (min,max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
}

var SeattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiePer: 3.7,
}

var CapitalHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiePer: 2.3,
}

var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCookiePer: 4.6,
}