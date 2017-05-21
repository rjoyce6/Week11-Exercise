//Create three objects with four properties (one must be an image file path)
// using object literal notation.
//Literal notation
var travel1 = {
  type: "economic",
  cost: 20,
  days: 5,
  pics: "http://lorempixel.com/100/100/people"
}

var travel2 = {
  type: "luxurious",
  cost: 40,
  days: 5,
  pics: "http://lorempixel.com/200/200/people"
}

var travel3 = {
  type: "double economic",
  cost: 30,
  days: 5,
  pics: "http://lorempixel.com/300/300/people"
}

var travel = [travel1, travel2, travel3];

var j = 0;



//Create the same three objects, with the same four properties,
//using a constructor notation.
function memories () {
  // Loop through the array of objects, for each property create an
  //element to add content to.
  for (var i = 0; i < travel.length; i++) {
    var div = document.createElement('div');
    div.className = 'col-md-4';
    div.id = 'memories'+ (i+1);
    var addHere =   document.getElementById('display');
    addHere.appendChild(div);

    // Add title
    var text = document.createElement ('h3');
    var thisText = document.createTextNode('Hotel ' + (i+1));
    text.appendChild(thisText);
    var addHere =   document.getElementById(div.id);
    addHere.appendChild(text);


    //create text nodes for each piece of content,
    // add those to the elements you created.
    var text = document.createElement('p');
    var thisText = document.createTextNode("Type: " +travel[i].type)
    text.appendChild(thisText);
    var addHere =   document.getElementById(div.id);
    addHere.appendChild(text);

    var totalCost = document.createElement('p');
    var thisText = document.createTextNode("Total Cost: $" + (travel[i].cost*travel[i].days) )
    totalCost.appendChild(thisText);
    addHere.appendChild(totalCost);

    //update the source and alt attributes of the image.
    var img = document.createElement('img');
    img.alt = 'traveling' + (i+1);
    img.src = travel[i].pics;
    addHere.appendChild(img)
  }

  j = i+1;
}
memories();


//constructor notation
function Hotel(type, cost, days, pics) {
  this.type = type;
  this.cost = cost;
  this.days = days;
  this.img = pics;
  this.total = function (){
    return this.cost*this.days;
  }
}

var visit1 = new Hotel('economic',100, 5, "http://lorempixel.com/400/400/people");
var visit2 = new Hotel('double economic',200, 5, "http://lorempixel.com/500/500/people");
var visit3 = new Hotel('luxurious',380, 5, "http://lorempixel.com/700/700/people");

console.log(visit1+  ', amount: ' + visit1.total());
console.log(visit2);
console.log(visit3);

//Add each constructor object to an array
var visit = [visit1, visit2, visit3];

function traveling () {

  // Loop through the array of objects, for each property create an
  // element to add content to.
  for (var i = 0; i < travel.length; i++) {
    var div = document.createElement('div');
    div.className = 'col-md-4';
    div.id = 'traveling' +(i+1);
    var addHere =   document.getElementById('display');
    addHere.appendChild(div);

    // Add title
    var text = document.createElement ('h3');
    var thisText = document.createTextNode('Hotel ' + j);
    text.appendChild(thisText);
    var addHere =   document.getElementById(div.id);
    addHere.appendChild(text);


    var text = document.createElement('p');
    var thisText = document.createTextNode("Type: " + visit[i].type)
    text.appendChild(thisText);
    addHere.appendChild(text);

    var totalCost = document.createElement('p');
    var thisText = document.createTextNode("Total Cost: $" + visit[i].total())
    totalCost.appendChild(thisText);
    addHere.appendChild(totalCost);

    //update the source and alt attributes of the image.
    var img = document.createElement('img');
    img.src = visit[i].img;
    img.alt = 'traveling' + (i+1);
    addHere.appendChild(img)
    j++;
  }
}
traveling();
