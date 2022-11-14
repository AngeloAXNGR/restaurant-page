import { createHomeLogo } from "./home";

const eats = [
  {
    name:"Guacamole",
    description:"w/ corn tostadas, salsa picante, roasted pepitas & lime. [VE GF]",
    rating: "12"
  },
  {
    name:"Crispy Pollo",
    description:"Southern fried & served w/ chipotle aioli",
    rating: "14.5"
  },
  {
    name: "Chorizo & Manchego Cheese Croquettes",
    description:"w/ lime & chipotle aioli. 4pc.",
    rating:"14"
  },
  {
    name:"Vegetable Taquitos",
    description:"Fried vegetable house made salsa roja dip & sour cream. 3pc",
    rating: "14"
  },
  {
    name: "Charred Street Corn",
    description: "w/ lime & chipotle aioli, Manchego cheese & chilli salt. 3pc. [GF VEO]" ,
    rating:"12"
  },
  {
    name:"Crispy Calamares",
    description:"w/ chipotle aioli",
    rating:"15"
  },
  {
    name:"Chiken Fajita Ensalada",
    description:"Shredded chicken tinga, lettuce, charred corn. [VEO]",
    rating:"19"
  },
  {
    name:"Patatas Bravas",
    description:"w/ chorizo, smoked paprika, parseley & Manchego. [GF DFO]",
    rating:"13"
  },
  {
    name:"Chilli Con Carne",
    description:"w/ mixed rice, sour cream, corn chips & Manchego cheese",
    rating:"24"
  },
  
]

const wine = [
  {
    name:"Hare & Tortoisee Prosecco",
    description:"NV Yarra Valley, VIC",
    rating: "10 / 48"
  },
  {
    name:"Plus Minus Zero Alcohol Prosecco",
    description:"",
    rating: "6.5 / 30"
  },
  {
    name: "Mandoleto Pinot Grigio",
    description:"2020, Italy",
    rating:"9.5 / 45"
  },
  {
    name:"The Pass Sauvignon Blanc",
    description:"2020, Marlborough Nz",
    rating: "10 / 48"
  },
  {
    name: "Tread Softly Rose",
    description: "2021, SA" ,
    rating:"10/48"
  },
  {
    name:"Plus Minus Zero Alcohol Rose",
    description:"",
    rating:"6.5 / 30"
  },
  {
    name:"Mesta Tempranillo",
    description:"2020, Spain",
    rating:"19"
  },
  {
    name:"The Hare & Tortoise Pinot Noir",
    description:"2021, Yarre Valley Vic",
    rating:"11.5 / 55"
  },
]

const beer = [
  {
    name:"Heaps Normal XPA Alcohol Free Beer",
    description:"",
    rating: "9"
  },
  {
    name:"Asahi",
    description:"",
    rating: "9.5"
  },
  {
    name: "Corona",
    description:"",
    rating:"9.5"
  },
  {
    name:"Stone & Wood Pacific Ale",
    description:"",
    rating: "11"
  },
  {
    name: "2 Brothers Brewery Little Apple Cider",
    description: "" ,
    rating:"9.5"
  },
  
]

const cocktails = [
  {
    name:"Main St Espresso Martini",
    description:"Eristoff Vodka, Sailor Jerry Spiced Rum, Baileys, Kahlua, Espresso (fancy w/ Gray Goose - add 3)",
    rating: "19.5"
  },
  {
    name:"Winter Garden",
    description:"Bombay Gin, Elderflower, Lemon, Apple, Cucumber",
    rating: "18.5"
  },
  {
    name: "Fire & Ice",
    description:"Cinnamon Whiskey, Lemon, Falernum, Whites",
    rating:"19"
  },
  {
    name:"Pash Me Off",
    description:"Bacardi Rum, Passionfruit Liqueur, Passionfruit, Pulp, Lime, Vanilla",
    rating: "20"
  },
]

const margaritas = [
  {
    name:"Classic",
    description:"Patron Silver Tequila, Contreau, Lime, Agave",
    rating: ""
  },
  {
    name:"Coconut",
    description:"Tequila, Contreau, Lime, Agave",
    rating: ""
  },
  {
    name: "Strawberry",
    description:"Patron Silver Tequila, Contreau, Strawberry, Lime",
    rating:""
  },
  {
    name:"Spicy",
    description:"Jalapeno Infused Blanco Tequila, Cointreau, Lime, Agave",
    rating: ""
  },  
]

const gin = [
  {
    name:"Beefeater 24",
    description:"",
    rating: "10"
  },
  {
    name:"The Botanist",
    description:"",
    rating: "12"
  },
  {
    name: "Roku Gin",
    description:"",
    rating:"12"
  },
  {
    name:"Monkey 47",
    description:"",
    rating: "12"
  },  
  {
    name:"Hendricks",
    description:"",
    rating: "12"
  },  
  {
    name:"Hendrick Lunar",
    description:"",
    rating: "12"
  },  
  {
    name:"Hendrick Neptunia",
    description:"",
    rating: "12"
  },  
]

function createMenuItem(name, description, rating){
  let element = document.createElement('div');
  element.classList.add('menu-item');
  
  let nameRatingGroup = document.createElement('div');
  nameRatingGroup.classList.add('name-rating-group');

  let itemName = document.createElement('h1');
  itemName.textContent = name;
  let itemRating = document.createElement('h1');
  itemRating.textContent = rating;

  nameRatingGroup.append(itemName, itemRating);

  let itemDescription = document.createElement('h2');
  itemDescription.textContent = description;
  itemDescription.classList.add('item-description');

  element.append(nameRatingGroup, itemDescription);

  return element
}


function createCards(){
  let element = document.createElement('div');
  element.classList.add('card-group');

  let card1 = document.createElement('fieldset');
  card1.classList.add('menu-card');
  let legend1 = document.createElement('legend');
  let itemList1 = document.createElement('div')
  itemList1.classList.add('item-list');

  eats.forEach(item =>{
    itemList1.appendChild(createMenuItem(item.name, item.description, item.rating));
  });

  legend1.textContent = 'Eats';
  legend1.classList.add('menu-label');



  let card2 = document.createElement('fieldset');
  card2.classList.add('menu-card');
  let itemList2 = document.createElement('div')
  itemList2.classList.add('item-list');


  wine.forEach(item =>{
    itemList2.appendChild(createMenuItem(item.name, item.description, item.rating));
  });


  let legend2 = document.createElement('legend');
  legend2.textContent = 'Wine';
  legend2.classList.add('menu-label');

  let card3 = document.createElement('fieldset');
  card3.classList.add('menu-card');
  let itemList3 = document.createElement('div')
  itemList3.classList.add('item-list');


  beer.forEach(item =>{
    itemList3.appendChild(createMenuItem(item.name, item.description, item.rating));
  });


  let legend3 = document.createElement('legend');
  legend3.textContent = 'Beers';
  legend3.classList.add('menu-label');

  let card4 = document.createElement('fieldset');
  card4.classList.add('menu-card');
  let itemList4 = document.createElement('div')
  itemList4.classList.add('item-list');

  cocktails.forEach(item =>{
    itemList4.appendChild(createMenuItem(item.name, item.description, item.rating));
  });

  let legend4 = document.createElement('legend');
  legend4.textContent = 'Cocktails';
  legend4.classList.add('menu-label');

  let card5 = document.createElement('fieldset');
  card5.classList.add('menu-card');
  let itemList5 = document.createElement('div')
  itemList5.classList.add('item-list');

  margaritas.forEach(item =>{
    itemList5.appendChild(createMenuItem(item.name, item.description, item.rating));
  });

  let legend5 = document.createElement('legend');
  legend5.textContent = 'Margaritas';
  legend5.classList.add('menu-label');

  let card6 = document.createElement('fieldset');
  card6.classList.add('menu-card');
  let itemList6 = document.createElement('div')
  itemList6.classList.add('item-list');

  gin.forEach(item =>{
    itemList6.appendChild(createMenuItem(item.name, item.description, item.rating));
  });

  let legend6 = document.createElement('legend');
  legend6.textContent = 'Gin';
  legend6.classList.add('menu-label');


  let card7 = document.createElement('fieldset');
  card7.classList.add('menu-card');
  card7.appendChild(createHomeLogo());

  card1.append(legend1, itemList1);
  card2.append(legend2, itemList2);
  card3.append(legend3, itemList3);
  card4.append(legend4, itemList4);
  card5.append(legend5, itemList5);
  card6.append(legend6, itemList6);
  
  element.append(card1, card2, card3, card4, card5, card6, card7);

  return element;
}

function createMenuComponent(){
  let element = document.createElement('div');
  element.classList.add('menu');

  element.appendChild(createCards());
  return element;
}

export {createMenuComponent};