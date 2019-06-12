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

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA


'use strict';

function Person(name, toenails, bananas, car) {
  this.name = name;
  this.nickname = toenails;
  this.age = bananas;
  this.car = car;
  Person.list.push(this);
}
Person.list = [];

Person.think = function() {
  console.log('thinkin');
};

Person.prototype.run = function() {
  console.log(`${this.name} is runnin`);
};

Person.prototype.walk = function() {
  console.log(`${this.name} is walkin`);
};


/*
  var john = {
    name: 'John',
    nickname: 'Baldy',
    age: 50,
    car: 'Mazda'
  }

  The calls to the constructor below do the same thing ...
  but they make instances of Person, not object literals.
 */

new Person('Cathy', 'Cat', NaN, 'GMC');
var john = new Person('John', 'Baldy', 50, 'Mazda');
new Person('Zach', 'Z', 20, 'Ford');
new Person('Allie', 'Gator', 13, 'none');

console.log(Person.list);

for( var i = 0; i<Person.list.length; i++) {
  Person.list[i].walk();
  Person.list[i].run();
}

Person.think();


// sample way to render the table

function renderTable (){
  var tableHeader = document.getElementById('tableHeader');
  var tableBody = document.getElementById('tableBody');
  var tableFooter = document.getElementById('tableFooter');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  // Blank cell
  var firstColumn = document.createElement('th');
  firstColumn.textContent = '';
  tableRow.appendChild(firstColumn);
  // Hours at top of table
  for (var i = 0; i < time.length; i++) {
    var tableHead = document.createElement('th');
    tableHead.textContent = time[i];
    tableRow.appendChild(tableHead);
  }
  //total cell at end
  var lastColumn = document.createElement('th');
  lastColumn.textContent = 'Total';
  tableRow.appendChild(lastColumn);

  tableHeader.appendChild(tableRow);

  //This section is building the body of the table

  for (i = 0; i < Location.list.length; i++) {
    tableRow = document.createElement('tr');
    var storeName = document.createElement('td');
    storeName.textContent = Location.list[i].name;
    tableRow.appendChild(storeName);

    for (var t = 0; t < times.length; t++) {
      var timeCookies = document.createElement('td');
      timeCookies.textContent = Location.list[i].avgCookiesPerHourArray[t];
      tableRow.appendChild(timeCookies);
    }
  }
