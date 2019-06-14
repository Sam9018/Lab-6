/* eslint-disable no-unused-vars */
'use strict';


var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var hourTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

function Store(name, minCust, maxCust, avgCookiePer) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePer = avgCookiePer;
  this.hourlyCookieSales = [];
  this.totalCookies = 0;
  Store.list.push(this);
  this.cookiesPerHour();
  // this.cookiesSoldrender();
}
Store.list = [];
console.log(hourTotals);

// Set up random # gen

Store.prototype.generateRandom = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

Store.prototype.cookiesPerHour = function () {
  for (var i=0; i< time.length; i++) {
    var cookiesSoldForSure = Math.floor(this.generateRandom() * this.avgCookiePer);
    this.hourlyCookieSales.push(cookiesSoldForSure);
    // return this.hourlyCookieSales;
    this.totalCookies += cookiesSoldForSure;
    hourTotals[i] += cookiesSoldForSure;
  }
};

console.log(Store.list);

Store.prototype.cookiesSoldrender = function () {
  var tableBody = document.getElementById('storeData');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = this.name;
  tableRow.appendChild(cell);

  for (var i = 0; i < this.hourlyCookieSales.length; i++) {
    cell = document.createElement('td');
    cell.textContent = this.hourlyCookieSales[i];
    tableRow.appendChild(cell);
  }


  cell = document.createElement('td');
  cell.textContent = this.totalCookies;
  tableRow.appendChild(cell);

  tableBody.appendChild(tableRow);
};


var createTableHead = function() {
  var tableHead = document.getElementById('timeData');
  var tableRow = document.createElement('tr');

  var cell = document.createElement('th');
  cell.textContent = '';
  tableRow.appendChild(cell);

  for (var i = 0; i < time.length; i++) {
    cell = document.createElement('th');
    cell.textContent = time[i];
    tableHead.appendChild(tableRow);
    tableRow.appendChild(cell);
  }

  cell = document.createElement('th');
  cell.textContent = 'Total';
  tableRow.appendChild(cell);
};

var createTableRows = function() {
  for (var i = 0; i < Store.list.length; i++) {
    Store.list[i].cookiesSoldrender();
  }
};

var createTableFoot = function() {
  var tableFoot = document.getElementById('sumData');
  var tableRow = document.createElement('tr');

  var cell = document.createElement('td');
  cell.textContent = 'Totals';
  tableRow.appendChild(cell);

  for (var i = 0; i < hourTotals.length; i++) {
    cell = document.createElement('td');
    cell.textContent = hourTotals[i];
    tableRow.appendChild(cell);
    tableFoot.appendChild(tableRow);
  }
};

var pike = new Store( 'First and Pike', 23, 65, 6.3);
var Seatac = new Store('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitalHill = new Store('Capital Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

createTableHead();
createTableRows();
createTableFoot();

// for (var i = 0; i < Store.list.length; i++) {
//   Store.list[i].cookiesPerHour();
//   Store.list[i].render();
// }

var form = document.getElementById('samForm');
form.addEventListener ('submit', addNewStore);

function addNewStore (event) {
  event.preventDefault();
  var newName = event.target.nameOfStore.value;
  var newMin = event.target.minimunCustomers.value;
  var newMax = event.target.maximumCustomers.value;
  var newAvg = event.target.averageCustomers.value;

  new Store(newName, newMin, newMax, newAvg);
  Store.list[Store.list.length-1].render();
}



