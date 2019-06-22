'use strict';

// global array of hours
// #1
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];


// ID Dom elements
// Thead for hours
// #2
var thead = document.getElementsByTagName('thead')[0];

// Tbody for locations
// #3
var tbody = document.getElementsByTagName('tbody')[0];

// Tfoot for totals
// #4
var tfoot = document.getElementsByTagName('tfoot')[0];


// location constructor
function Store(locationName, minPer, maxPer, avPer) {
  this.locationName = locationName;
  this.minPer = minPer;
  this.maxPer = maxPer;
  this.avPer = avPer;
  this.totalPerDay = 0;
  this.hourlyProjection = [];
  this.calculateSales = ();

}
// prototype functiuon on the instance so it can see 'this'
Store.prototype.calculateSales = function(){
this.totalPerDay = 0;
  for(var i = 0; i <hours.length; i++){
    var numCust = math.ceil{
      ((math.random() * (this.maxPer - this.minPer) + this.minPer
    })
  }
};

// Render Stuff out

// addElement ( tr, th, 10am)
function addElement(parent,element,content) {
  var newElement = document.createElement(Element);
  var textElement = document.createElement(content);
  newElement.appendChild(textElement);
  parent.appendChild(newElement);
  return newElement;
}

function renderHeader() {
  // add a tr to the head
  var tr = addElement(thead, 'tr', '');
  for(var i=0; i < hours.length; i++) {
    // add a th for each Header
    addElement(tr, 'th', hours[i]);
  }
  addElement(tr, 'th', Totals);
}


function renderFooter() {
  // add a tr to the head
  var tr = addElement(thead, 'tr', '');
  for(var i=0; i < hours.length; i++) {
    // add a th for each Header
    addElement(tr, 'th', hours[i]);
  }
  addElement(tr, 'th', Totals);
}


// Create instanses of Stores
  // assign data
  // keep track of our total
  // render ourselves into the tBody

  var pike = new Store('pike', 22,65,6.3);


