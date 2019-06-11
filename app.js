'use strict';


var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiePer: 6.3,
  name: ('First and Pike'),
  totalCookiesSold: [],
  totalCookies: 0,

  generateRandom:function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function () {
    return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookiePer);
  },

  render: function () {

    var divElement = document.getElementById('store');
    var storeTitle = document.createElement('h2');
    storeTitle.textContent = this.name;
    divElement.appendChild(storeTitle);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);




    for (var i=0; i< time.length; i++) {
      console.log(`${time[i]}: ${this.cookiesPerHour()}`);
      var hourData = document.createElement('li');
      var cookiesSoldPerHour = this.cookiesPerHour();
      hourData.textContent = `${time[i]}: ${cookiesSoldPerHour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookies += cookiesSoldPerHour;
      console.log(this.totalCookies);
      // this.totalCookiesSold.push(this.cookiesPerHour());

      // console.log(this.totalCookiesSold);
    }
    var showTotalCookies = document.createElement('li');
    showTotalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    storeData.appendChild(showTotalCookies);

  }
};


console.log(firstAndPike.generateRandom (firstAndPike.minCust,firstAndPike.maxCust), 'generateRandom');
console.log(firstAndPike.cookiesPerHour(),'cookiesPerHour');

firstAndPike.render();



var SeatacAirport = {
  minCust: 3,
  maxCust: 24,
  avgCookiePer: 1.2,
  name: ('Seatac Airport'),
  totalCookiesSold: [],
  totalCookies: 0,

  generateRandom:function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function () {
    return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookiePer);
  },

  render: function () {

    var divElement = document.getElementById('store');
    var storeTitle = document.createElement('h2');
    storeTitle.textContent = this.name;
    divElement.appendChild(storeTitle);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);

    for (var i=0; i< time.length; i++) {
      console.log(`${time[i]}: ${cookiesSoldPerHour} cookies`);
      var hourData = document.createElement('li');
      var cookiesSoldPerHour = this.cookiesPerHour();
      hourData.textContent = `${time[i]}: ${cookiesSoldPerHour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookies += cookiesSoldPerHour;
      console.log(this.totalCookies);

    }
    var showTotalCookies = document.createElement('li');
    showTotalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    storeData.appendChild(showTotalCookies);
  }
};

SeatacAirport.render();

console.log(SeatacAirport.generateRandom (SeatacAirport.minCust,SeatacAirport.maxCust), 'generateRandom');
console.log(SeatacAirport.cookiesPerHour(),'cookiesPerHour');

SeatacAirport.render();



var SeattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiePer: 3.7,
  name: ('SeattleCenter'),
  totalCookiesSold: [],
  totalCookies: 0,

  generateRandom:function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function () {
    return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookiePer);
  },

  render: function () {

    var divElement = document.getElementById('store');
    var storeTitle = document.createElement('h2');
    storeTitle.textContent = this.name;
    divElement.appendChild(storeTitle);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);




    for (var i=0; i< time.length; i++) {
      console.log(`${time[i]}: ${this.cookiesPerHour()}`);
      var hourData = document.createElement('li');
      var cookiesSoldPerHour = this.cookiesPerHour();
      hourData.textContent = `${time[i]}: ${cookiesSoldPerHour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookies += cookiesSoldPerHour;
      console.log(this.totalCookies);
    }
    var showTotalCookies = document.createElement('li');
    showTotalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    storeData.appendChild(showTotalCookies);

  }
};

console.log(SeattleCenter.generateRandom (SeattleCenter.minCust,SeattleCenter.maxCust), 'generateRandom');
console.log(SeattleCenter.cookiesPerHour(),'cookiesPerHour');

SeattleCenter.render();




var CapitalHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiePer: 2.3,
  name: ('CapitalHill'),
  totalCookiesSold: [],
  totalCookies: 0,

  generateRandom:function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function () {
    return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookiePer);
  },

  render: function () {

    var divElement = document.getElementById('store');
    var storeTitle = document.createElement('h2');
    storeTitle.textContent = this.name;
    divElement.appendChild(storeTitle);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);




    for (var i=0; i< time.length; i++) {
      console.log(`${time[i]}: ${this.cookiesPerHour()}`);
      var hourData = document.createElement('li');
      var cookiesSoldPerHour = this.cookiesPerHour();
      hourData.textContent = `${time[i]}: ${cookiesSoldPerHour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookies += cookiesSoldPerHour;
      console.log(this.totalCookies);
    }
    var showTotalCookies = document.createElement('li');
    showTotalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    storeData.appendChild(showTotalCookies);

  }
};

console.log(CapitalHill.generateRandom (CapitalHill.minCust,CapitalHill.maxCust), 'generateRandom');
console.log(CapitalHill.cookiesPerHour(),'cookiesPerHour');

CapitalHill.render();



var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCookiePer: 4.6,
  name: ('Alki'),
  totalCookiesSold: [],
  totalCookies: 0,

  generateRandom:function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function () {
    return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookiePer);
  },

  render: function () {

    var divElement = document.getElementById('store');
    var storeTitle = document.createElement('h2');
    storeTitle.textContent = this.name;
    divElement.appendChild(storeTitle);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);




    for (var i=0; i< time.length; i++) {
      console.log(`${time[i]}: ${this.cookiesPerHour()}`);
      var hourData = document.createElement('li');
      var cookiesSoldPerHour = this.cookiesPerHour();
      hourData.textContent = `${time[i]}: ${cookiesSoldPerHour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookies += cookiesSoldPerHour;
      console.log(this.totalCookies);
    }
    var showTotalCookies = document.createElement('li');
    showTotalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    storeData.appendChild(showTotalCookies);

  }
};

console.log(Alki.generateRandom (Alki.minCust,Alki.maxCust), 'generateRandom');
console.log(Alki.cookiesPerHour(),'cookiesPerHour');

Alki.render();
